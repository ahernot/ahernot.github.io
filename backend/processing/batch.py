#!/usr/bin/env python

import os
import posix

from process_logger import Logger




def run(path):

    # Initialise logger
    logger = Logger(path)

    with os.scandir(path) as albums:
        for album in albums:

            # Check if album is directory
            if not album.is_dir():
                continue

            with os.scandir(album.path) as files:
                for file in files:

                    # CONTINUE if not image file

                    # Check if already processed
                    if logger.is_processed(album.name, file.name):
                        continue

                    # read exif data

                    # watermark and save all in destination path

                    # save json info in destination

                    # Log as processed
                    logger.log_processed(album.name, file.name)

    # Write log
    logger.save()


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

