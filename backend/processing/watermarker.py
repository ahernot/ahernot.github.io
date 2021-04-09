import numpy as np
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

    def add_watermark(self, watermark: np.ndarray, size: float,  position: (float, float), opacity: float):
        # create a watermark layer, and a mask layer based on self.__original
        # position as percentages of image
        # size as percentage of image area
        # no rotation

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