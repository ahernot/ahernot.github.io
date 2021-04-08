
import os
import posix



DIRPATH = '/Users/anatole/Desktop/website-resources/street-photography'
with os.scandir(DIRPATH) as albums:
    
    for album in albums:

        if not album.is_dir():
            continue

        with os.scandir(album.path) as images:


            # CONTINUE if not image file

            # CONTINUE if already processed
            # >> single JSON file in ROOT folder

            # read exif data

            # watermark and save all in destination path

            # save json info in destination

            # log as already processed

            pass

        """
        fileName = file.name
        filePath = file.path

        exif = file.exif
        """


class Batch:

    def __init__(self, path):
        pass

    def process(self):
        pass

