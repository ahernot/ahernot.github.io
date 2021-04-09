import numpy as np
import cv2

from auxiliary_functions import clamp, imread_rgba


# TODO: keep alpha in IMAGE after merge
# image here is already resized
class ImageLayered:

    def __init__(self, image: np.ndarray):
        self.__original = image
        self.__image = self.__original
        self.__masks = list()

        self.height, self.width, self.depth = (self.__image).shape
        self.ratio = self.width / self.height
        self.area = self.width * self.height

    def __round(self, i):
        return round(i)

    def add_watermark(self, watermark: np.ndarray, size: float,  x_position: float, y_position: float, opacity: float):
        # create a watermark layer, and a mask layer based on self.__original
        # position as percentages of image, from top left
        # size as percentage of image area
        # no rotation

        # Clamp values in [0., 1.]
        size = clamp(size, 0., 1.)
        x_position = clamp(x_position, 0., 1.)
        y_position = clamp(x_position, 0., 1.)

        # Unpack measurements
        w_height, w_width, w_depth = watermark.shape
        w_ratio = w_width / w_height



        # Calculate new size
        if w_ratio > self.ratio:  # watermark is wider than image, so will overflow along width first
            new_width = (size * self.area * w_ratio) ** 0.5
            new_width = min( new_width, self.width )
            new_height = new_width / w_ratio
            
        else:  # watermark is taller than image, so will overflow along height first
            new_height = (size * self.area / w_ratio) ** 0.5
            new_height = min( new_height, self.height )
            new_width = new_height * w_ratio

        # Round values
        new_width = self.__round(new_width)
        new_height = self.__round(new_height)

        # Resize watermark
        watermark_resized = cv2.resize(watermark, (new_width, new_height), interpolation=cv2.INTER_AREA)



        # Calculate position
        half_width = self.__round(new_width / 2)
        half_height = self.__round(new_height / 2)

        width_range = self.width - new_width
        height_range = self.height - new_height
        w_center_x = self.__round(width_range * x_position) + half_width
        w_center_y = self.__round(height_range * y_position) + half_height

        # Calculate range bounding box
        w_range_x_start = w_center_x - half_width  # trim watermark if less than 0
        w_range_x_stop = w_center_x + half_width  # trim watermark if more than self.width
        w_range_y_start = w_center_y - half_height
        w_range_y_stop = w_center_y + half_height

        # Safeguard: trim watermark if out of bounds
        if w_range_y_start < 0:
            trim_top = 0 - w_range_y_start
            watermark_resized = watermark_resized[trim_top:, :, :]
            w_range_y_start = 0
        if w_range_y_stop > self.height:
            trim_bottom = w_range_y_stop - self.height
            watermark_resized = watermark_resized[:trim_bottom, :, :]
            w_range_y_stop = self.height
        if w_range_x_start < 0:
            trim_left = 0 - w_range_x_start
            watermark_resized = watermark_resized[:, trim_left:, :]
            w_range_x_start = 0
        if w_range_x_stop > self.width:
            trim_right = w_range_x_stop - self.width
            watermark_resized = watermark_resized[:, :trim_right, :]
            w_range_x_stop = self.width
        

        # Generate watermark layer
        watermark_layer = np.zeros_like(self.__image, dtype=np.uint8)
        #watermark_layer[:, :, 3] = 0
        watermark_layer[w_range_y_start:w_range_y_stop, w_range_x_start:w_range_x_stop, :] = watermark_resized
        #cv2.imwrite('ouuut.png', watermark_layer)

        # Merge layers
        self.__merge_above_image(watermark_layer, opacity)

        # Export mask

        
    def __merge_above_image(self, layer: np.ndarray, opacity: float):

        threshold = 0.1
        opacity = clamp(opacity, 0., 1.)

        # Generate watermark mask
        layer_mask = (layer [:, :, 3] / 255.) > threshold
        layer_mask_inv = (1 - layer_mask) .astype(bool)
        
        # Apply opacity to watermark
        layer_transp = layer .copy() .astype(np.float64)
        layer_transp[:, :, 0] [layer_mask] *= opacity
        layer_transp[:, :, 1] [layer_mask] *= opacity
        layer_transp[:, :, 2] [layer_mask] *= opacity
        layer_transp[:, :, 3] [layer_mask] *= opacity
        layer_transp[:, :, 3] [layer_mask_inv] = 0.0
        #cv2.imwrite('layer.png', layer)

        # Apply opacity to image
        image_transp = self.__image .copy() .astype(np.float64)
        image_transp[:, :, 0] [layer_mask] *= (1 - opacity)
        image_transp[:, :, 1] [layer_mask] *= (1 - opacity)
        image_transp[:, :, 2] [layer_mask] *= (1 - opacity)
        image_transp[:, :, 3] [layer_mask] *= (1 - opacity)

        # Modify image
        self.__image = (layer_transp + image_transp) .astype(np.uint8)


    def export(self, dirpath):

        # TODO: EXIF WATERMARK

        # Save image
        cv2.imwrite(dirpath + 'img.png', self.__image)

        
        # export all masks

        pass




watermark = cv2.imread('./backend/processing/watermark-white.tiff', cv2.IMREAD_UNCHANGED)
image = imread_rgba('./backend/processing/IMG_8503.JPG')

i = ImageLayered(image)
i.add_watermark(watermark, 0.3, 0, 0, 0.3)
i.export('')
