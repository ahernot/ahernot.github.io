import os

def generate_dir(dirpath: str):
    try:
        os.makedirs(dirpath)
    except FileExistsError:
        pass