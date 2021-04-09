import os

def generate_dir(dirpath: str):
    try:
        os.makedirs(dirpath)
    except FileExistsError:
        pass

def clamp(val, min_val, max_val):
    if min_val > max_val: min_val, max_val = max_val, min_val
    return max(min_val, min(val, max_val))
