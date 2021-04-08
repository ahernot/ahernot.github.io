#!/usr/bin/env python

import os
import posix
import json #TEMP

import preferences
from process_logger import Logger
from file import MediaFile
import exif_formatter




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

                    # Check path type
                    if not file.is_file():
                        continue

                    # Create MediaFile object
                    media_file = MediaFile(file)

                    # Check image file type
                    if (media_file.extension).lower() not in preferences.EXTENSIONS:
                        continue

                    # Check if already processed
                    if logger.is_processed(album.name, media_file.name):
                        continue

                    # Generate destination path
                    dest_path = f'../../resources/albums/_tests/{album.name}/'
                    try:
                        os.makedirs(dest_path)
                    except FileExistsError:
                        pass

                    # TODO: watermark and save all in destination path
                    #####

                    # Read exif data and save json in destination path
                    exif_dict = exif_formatter.generate_image_dictionary( media_file.exif )

                    json_name = f'{media_file.name}.json'
                    with open(dest_path + json_name, 'w', encoding='utf-8') as dump:
                        json.dump(exif_dict, dump, indent=4)

                    # Log file as processed
                    logger.log_processed(album.name, media_file.name)

    # Write log
    logger.save()

# watermarking program will be copied over from my watermarking utility
