import numpy as np
from auxiliary_functions import clamp
# from math import ceil


# TODO: keep alpha in IMAGE
# image here is already resized
class ImageLayered:

    def __init__(self, image):
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
        opacity = clamp(opacity, 0., 1.)

        # Unpack measurements
        w_height, w_width, w_depth = watermark.shape
        w_ratio = w_width / w_height



        # Calculate new size
        if w_ratio > self.ratio:  # watermark is wider than image, so will overflow along width first
            new_width = size * self.area * w_ratio
            new_width = min( new_width, self.width )
            new_height = new_width / w_ratio
            
        else:  # watermark is taller than image, so will overflow along height first
            new_height = size * self.area / w_ratio
            new_height = min( new_height, self.height )
            new_width = new_height * w_ratio

        # Round values
        new_width = self.__round(new_width)
        new_height = self.__round(new_height)



        # Calculate position
        width_range = self.width - new_width
        height_range = self.height - new_height
        w_center_x = width_range * x_position
        w_center_y = height_range * y_position

        # Calculate range bounding box
        w_range_x_start = w_center_x - self.__round(new_width / 2)  # trim watermark if less than 0
        w_range_x_stop = w_range_x_start + new_width  # trim watermark if more than self.width
        w_range_y_start = w_center_y - self.__round(new_height / 2)
        w_range_y_stop = w_range_y_start + new_height

        # Safeguard: trim watermark if out of bounds
        if w_range_y_start < 0:
            trim_top = 0 - w_range_y_start
            watermark = watermark[trim_top:, :, :]
            w_range_y_start = 0
        if w_range_y_stop > self.height:
            trim_bottom = w_range_y_stop - self.height
            watermark = watermark[:trim_bottom, :, :]
            w_range_y_stop = self.height
        if w_range_x_start < 0:
            trim_left = 0 - w_range_x_start
            watermark = watermark[:, trim_left:, :]
            w_range_x_start = 0
        if w_range_x_stop > self.width:
            trim_right = w_range_x_stop - self.width
            watermark = watermark[:, :trim_right, :]
            w_range_x_stop = self.width
        
    

        # Initialise watermark layer
        watermark_layer = np.empty_like(self.__image)


        


        pass

    def __merge_above_image(self, layer):

        layer_1 = self.layers(id1) [:, :, 3]
        layer_2 = self.layers(id2) [:, :, 3]

        layer_2_normalised = layer_2 / 255.
        layer_2_mask = layer_2_normalised > 0.1  # threshold
        layer_2_normalised[layer_2_mask] = opacity

        layers_merged = (1.0 - layer_2_normalised) * layer_1 + layer_2_normalised * layer_2_normalised

        self.__image = layers_merged


    def export(self, dirpath):

        # EXIF WATERMARK

        # export watermarked image
        # export all masks

        pass