import cv2

paths = [
    r"C:\Users\JephMari\Desktop\bir-registration-seal-badge-clean.png",
    r"C:\Users\JephMari\Desktop\bir-registration-seal-badge.jpg",
]

detector = cv2.QRCodeDetector()
for p in paths:
    img = cv2.imread(p)
    data, points, _ = detector.detectAndDecode(img)
    name = p.rsplit("\\", 1)[-1]
    print(f"{name}  ->  {repr(data) if data else '(NOT DECODED)'}")
