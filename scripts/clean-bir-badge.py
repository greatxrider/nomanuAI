"""Clean up the BIR Registration Seal Badge: remove background security
watermark, preserve QR code + key elements, output on plain white."""

from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

SRC = r"C:\Users\JephMari\Desktop\bir-registration-seal-badge.jpg"
DST = r"C:\Users\JephMari\Desktop\bir-registration-seal-badge-clean.png"

img = Image.open(SRC).convert("RGB")
arr = np.array(img).astype(np.int16)

r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]

max_ch = np.maximum(np.maximum(r, g), b)
min_ch = np.minimum(np.minimum(r, g), b)
chroma = max_ch - min_ch
lightness = (r + g + b) / 3

# Watermark: near-neutral (low chroma) AND lighter than dark text.
# Title / reminder text is essentially black (lightness < 70).
# Watermark "BUREAU OF INTERNAL REVENUE" is gray (lightness 110-200).
# Colored content (blue text, red shield, gold ribbon, QR black) has high
# chroma and so is preserved by the chroma test.
watermark_mask = (chroma < 55) & (lightness > 105)

arr_clean = arr.copy()
arr_clean[watermark_mask] = [255, 255, 255]
arr_clean = np.clip(arr_clean, 0, 255).astype(np.uint8)

result = Image.fromarray(arr_clean)

# Slight sharpen + contrast boost for clarity
result = result.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=2))
result = ImageEnhance.Contrast(result).enhance(1.18)
result = ImageEnhance.Sharpness(result).enhance(1.15)

result.save(DST, "PNG", optimize=True)
print(f"Saved {DST}  size={result.size}")
