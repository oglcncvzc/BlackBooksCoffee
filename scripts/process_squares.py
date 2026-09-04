import os
from PIL import Image

folder = 'public/images/items'
for filename in os.listdir(folder):
    if filename.endswith('.jpg') or filename.endswith('.png') or filename.endswith('.jpeg'):
        filepath = os.path.join(folder, filename)
        try:
            img = Image.open(filepath).convert('RGB')
            w, h = img.size
            min_dim = min(w, h)
            left = (w - min_dim) // 2
            top = (h - min_dim) // 2
            cropped = img.crop((left, top, left + min_dim, top + min_dim))
            resized = cropped.resize((400, 400), Image.Resampling.LANCZOS)
            resized.save(filepath, quality=92)
            print(f"Processed 1:1 square: {filename}")
        except Exception as e:
            print(f"Error on {filename}: {e}")

print("All item images processed into crisp 1:1 squares!")
