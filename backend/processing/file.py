import posix
import os

from exiftool import ExifTool



class MediaFile:

    def __init__(self, dirEntry: posix.DirEntry):

        self.name = dirEntry.name
        self.path = dirEntry.path
        self.extension = os.path.splitext(self.path) [1] [1:]
        self.exif = self.__get_exif()

    def __get_exif(self):
        with ExifTool() as e:
            metadata = e.get_metadata(self.path)
        return metadata[0]
        
