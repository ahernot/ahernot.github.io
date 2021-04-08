#!/usr/bin/env python

import os
import posix

import preferences
from process_logger import Logger
from file import MediaFile




def run(path: str):

    # Initialise logger
    logger = Logger(path)

    with os.scandir(path) as albums:
        for album in albums:

            # Check if album is directory
            if not album.is_dir():
                continue

            with os.scandir(album.path) as files:
                for file in files:

                    # Create MediaFile object
                    media_file = MediaFile(file)

                    # Check image file type
                    if media_file.extension not in preferences.EXTENSIONS:
                        continue

                    # Check if already processed
                    if logger.is_processed(album.name, media_file.name):
                        continue

                    # TODO: read exif data and save json in destination path

                    # TODO: watermark and save all in destination path

                    # Log file as processed
                    logger.log_processed(album.name, media_file.name)

    # Write log
    logger.save()

# watermarking program will be pulled from my watermarking utility
