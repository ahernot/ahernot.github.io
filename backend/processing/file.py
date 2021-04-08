import posix
import os

import exif



class MediaFile():

    def __init__(self, dirEntry: posix.DirEntry):

        self.name = dirEntry.name
        self.path = dirEntry.path
        self.extension = os.path.splitext(self.path)

        self.exif = dict()

    @property
    def exif(self):
        return self.__exif

    @exif.setter
    def exif(self, val):
        self.__exif = val  # CALL EXIF READER


CDE = CustomDirEntry()
print(CDE.exif)
CDE.exif = 10
print(CDE.exif)