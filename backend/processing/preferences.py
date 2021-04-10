SOURCE_PATH = '/Users/anatole/Desktop/website-resources/_sampleDir'  # '/Users/anatole/Desktop/website-resources/albums/'
EXTENSIONS = ['jpg', 'jpeg', 'tiff', 'png', 'heic', 'heif']

from auxiliary_functions import FloorDict
SIZES = [
    (0.0, 1200),  # aspect ratio ≥0.0  =>  size = 1200px
    (2.5, 2000)  # aspect ratio ≥2.5  =>  size = 2000px
]
SIZES_FD = FloorDict( SIZES )
# TODO: add 3 size variants: (400, 800, 1200) and (600, 1200, 2000) for small/medium/large

WATERMARKS = [
    (0.1, 0.0, 1.0, 0.3),  # bottom left
    (0.1, 0.5, 0.5, 0.3),  # middle
    (0.1, 1.0, 0.0, 0.3)  # top right
]
