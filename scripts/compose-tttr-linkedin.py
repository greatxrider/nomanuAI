"""Compose the NomanuAI logo into the empty top white panel of the
'We joined the global community of changemakers' TTTR template, output to Desktop."""

from pathlib import Path
import numpy as np
from PIL import Image

TEMPLATE = Path(r"C:\Users\JephMari\Desktop\Portfolio\nomanuAI\public\partners\TTTR\Joined TTTR - company logo.png")
LOGO     = Path(r"C:\Users\JephMari\Desktop\Portfolio\nomanuAI\public\assets\nomanuai-logo.png")
OUTPUT   = Path(r"C:\Users\JephMari\Desktop\nomanuai-tttr-joined.png")

template = Image.open(TEMPLATE).convert("RGBA")
logo     = Image.open(LOGO).convert("RGBA")

arr = np.array(template.convert("RGB"))
H, W, _ = arr.shape
white_mask = (arr[:, :, 0] > 240) & (arr[:, :, 1] > 240) & (arr[:, :, 2] > 240)

# Use a strict threshold so headline / decorative rows don't qualify; the
# panel interior is essentially 100% white so 85% is more than safe.
row_is_panel = white_mask.sum(axis=1) > (W * 0.85)

# Find the longest contiguous run in the TOP HALF — that's the top panel.
top_half_limit = H // 2 + 80
runs = []
start = None
for i in range(top_half_limit):
    if row_is_panel[i] and start is None:
        start = i
    elif not row_is_panel[i] and start is not None:
        runs.append((start, i - 1))
        start = None
if start is not None:
    runs.append((start, top_half_limit - 1))

if not runs:
    raise RuntimeError("Could not detect top panel.")

y0, y1 = max(runs, key=lambda r: r[1] - r[0])

# For the horizontal extent, look only inside that vertical band so the
# rounded corners don't bias the rectangle.
band = white_mask[y0:y1 + 1]
col_white = band.sum(axis=0)
panel_cols = np.where(col_white > (y1 - y0) * 0.85)[0]
x0, x1 = int(panel_cols.min()), int(panel_cols.max())

print(f"Detected top white panel: x=[{x0},{x1}]  y=[{y0},{y1}]")

panel_w = x1 - x0
panel_h = y1 - y0
cx = (x0 + x1) // 2
cy = (y0 + y1) // 2

# Size the logo to ~64% of panel width — matches the TTTR lockup's visual
# weight in the bottom panel. Detected panel_h is the inner-fully-white band
# (excluding rounded corners + skew), so we don't constrain by it.
target_w = int(panel_w * 0.64)
target_h = round(logo.height * target_w / logo.width)

logo_resized = logo.resize((target_w, target_h), Image.LANCZOS)
px = cx - target_w // 2
py = cy - target_h // 2

print(f"Logo placed: size=({target_w},{target_h}) at ({px},{py})  panel_center=({cx},{cy})")

template.alpha_composite(logo_resized, dest=(px, py))
template.save(OUTPUT, "PNG", optimize=True)
print(f"Saved {OUTPUT}")
