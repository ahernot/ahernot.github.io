from fractions import Fraction

# dictionary with """ newKey: [oldKey1, oldKey2, …] """
EXIF_TAGS = {
    'fileSizeOriginal': ['File:FileSize'],

    #'autor': 'Anatole Hernot',
    'dateTimeOriginal': ['EXIF:DateTimeOriginal'],
    'offsetTimeOriginal': ['EXIF:OffsetTimeOriginal'],
    #'dateFormatted': '2021.01.01',
    #'location': 'Unnamed Location',
    'camera': ['EXIF:Model'],
    #'tags': ['tag'],

    'settingISO': ['EXIF:ISO'],
    #'settingShutterSpeedSeconds': '1/60',  # to convert back to a fraction
    'settingFNumber': ['EXIF:FNumber'],
    'settingFocalLength': ['EXIF:FocalLength'],

    #'aspectRatio': '3:2',
    #'imageWidth': 600,
    #'imageHeight': 400,
    #'megapixels': 600 * 400,
    'imageWidthOriginal': ['EXIF:ExifImageWidth'],
    'imageHeightOriginal': ['EXIF:ExifImageHeight'],
    #'megapixelsOriginal': 4000 * 6000
}


def generate_image_dictionary(metadata: dict):

    exif_dict = dict()

    exif_dict['fileName'] = ''
    exif_dict['fileSize'] = ''  # after postprocessing
    exif_dict['filePathOriginal'] = ''

    exif_dict['author'] = 'Anatole Hernot'
    exif_dict['dateFormatted'] = ''
    exif_dict['location'] = 'Unknown Location'
    #exif_dict['tags'] = ['tag']

    # Fill simple tags
    for tag in EXIF_TAGS:

        exif_tags = EXIF_TAGS[tag]
        val = None  # default value

        # Try getting value, in order of priority
        for exif_tag in exif_tags:
            try: val = metadata[exif_tag]
            except: pass
        
        exif_dict[tag] = val


    # settingShutterSpeed
    try:
        shutter_speed_float = metadata['EXIF:ExposureTime']
        shutter_speed_frac = Fraction(shutter_speed_float) .limit_denominator(10**5)
        exif_dict['settingShutterSpeedSeconds'] = str(shutter_speed_frac)
    except:
        exif_dict['settingShutterSpeedSeconds'] = None


    #'aspectRatio': '3:2',
    #'imageWidth': 600,
    #'imageHeight': 400,
    #'megapixels': 600 * 400,

    # megapixelsOriginal
    try:
        exif_dict['megapixelsOriginal'] = round(exif_dict['imageWidthOriginal'] * exif_dict['imageHeightOriginal'] / 1e6, 1)
    except:
        exif_dict['megapixelsOriginal'] = None

    return exif_dict
