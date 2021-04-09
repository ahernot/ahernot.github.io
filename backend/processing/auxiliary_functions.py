import os
import cv2
import numpy as np

def generate_dir(dirpath: str):
    try:
        os.makedirs(dirpath)
    except FileExistsError:
        pass

def clamp(val, min_val, max_val):
    if min_val > max_val: min_val, max_val = max_val, min_val
    return max(min_val, min(val, max_val))

def imread_rgba(path):
    img = cv2.imread(path, cv2.IMREAD_UNCHANGED)
    height, width, depth = img.shape
    if depth == 3:
        img = np.concatenate((
            img,
            np.ones((height, width, 1), dtype=img.dtype) * 255),
            axis=2
        )
    return img