import os
from PIL import Image

def crop_and_save(src_path, output_path, box):
    img = Image.open(src_path)
    cropped = img.crop(box)
    cropped.save(output_path, quality=95)
    print(f"Saved {output_path} with size {cropped.size}")

os.makedirs('public/images/items', exist_ok=True)

# 1. SU (Pure glass of water cropped specifically around the water glass)
img = Image.open('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/turkish_coffee_clean_1788507785263.jpg')
w, h = img.size
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/turkish_coffee_clean_1788507785263.jpg', 
              'public/images/items/su.jpg', 
              (int(w*0.68), int(h*0.44), int(w*0.93), int(h*0.72)))

# 2. ESPRESSO (Close-up of espresso cup)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/espresso_clean_1788507808106.jpg',
              'public/images/items/espresso.jpg',
              (int(w*0.25), int(h*0.35), int(w*0.75), int(h*0.85)))

# 3. RISTRETTO (Tighter shot of the espresso)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/espresso_clean_1788507808106.jpg',
              'public/images/items/ristretto.jpg',
              (int(w*0.30), int(h*0.40), int(w*0.70), int(h*0.80)))

# 4. ESPRESSO LUNGO (Espresso shot from vintage collection)
if os.path.exists('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/espresso_coffee_1788504158336.jpg'):
    img2 = Image.open('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/espresso_coffee_1788504158336.jpg')
    w2, h2 = img2.size
    crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/espresso_coffee_1788504158336.jpg',
                  'public/images/items/espresso-lungo.jpg',
                  (int(w2*0.45), int(h2*0.40), int(w2*0.80), int(h2*0.80)))

# 5. AMERICANO (Mug focus)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/americano_simple_1788508146558.jpg',
              'public/images/items/americano.jpg',
              (int(w*0.30), int(h*0.35), int(w*0.75), int(h*0.80)))

# 6. CAFFE CREMA (Upper crema focus)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/americano_simple_1788508146558.jpg',
              'public/images/items/caffe-crema.jpg',
              (int(w*0.32), int(h*0.38), int(w*0.68), int(h*0.74)))

# 7. CAPPUCCINO (Heart latte art foam focus)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/latte_clean_1788507905925.jpg',
              'public/images/items/cappuccino.jpg',
              (int(w*0.38), int(h*0.50), int(w*0.72), int(h*0.84)))

# 8. CAFFE LATTE (Full cup & saucer)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/latte_clean_1788507905925.jpg',
              'public/images/items/caffe-latte.jpg',
              (int(w*0.30), int(h*0.48), int(w*0.80), int(h*0.92)))

# 9. FLAT WHITE (Latte art close-up)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/latte_clean_1788507905925.jpg',
              'public/images/items/flat-white.jpg',
              (int(w*0.35), int(h*0.48), int(w*0.75), int(h*0.88)))

# 10. LATTE MACCHIATO (Tall glass iced/hot milk layer)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_latte_simple_1788508118029.jpg',
              'public/images/items/latte-macchiato.jpg',
              (int(w*0.35), int(h*0.35), int(w*0.65), int(h*0.80)))

# 11. TURK KAHVESI (Coffee cup focus - NOT showing water glass)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/turkish_coffee_clean_1788507785263.jpg',
              'public/images/items/turk-kahvesi.jpg',
              (int(w*0.30), int(h*0.45), int(w*0.65), int(h*0.78)))

# 12. ICED LATTE
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_latte_simple_1788508118029.jpg',
              'public/images/items/iced-latte.jpg',
              (int(w*0.32), int(h*0.36), int(w*0.68), int(h*0.84)))

# 13. ICED AMERICANO
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_latte_clean_1788507831879.jpg',
              'public/images/items/iced-americano.jpg',
              (int(w*0.35), int(h*0.38), int(w*0.65), int(h*0.82)))

# 14. ESPRESSO TONIC
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_tea_clean_1788507880349.jpg',
              'public/images/items/espresso-tonic.jpg',
              (int(w*0.30), int(h*0.30), int(w*0.70), int(h*0.80)))

# 15. DEMLEME SIYAH CAY (Tea glass on saucer)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/tea_clean_1788507855491.jpg',
              'public/images/items/demleme-siyah-cay.jpg',
              (int(w*0.25), int(h*0.30), int(w*0.75), int(h*0.85)))

# 16. YESIL CAY (Green tea crop)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/tea_clean_1788507855491.jpg',
              'public/images/items/yesil-cay.jpg',
              (int(w*0.33), int(h*0.33), int(w*0.67), int(h*0.77)))

# 17. SEFTALI CARKIFELEK
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_tea_clean_1788507880349.jpg',
              'public/images/items/seftali-carkifelek.jpg',
              (int(w*0.30), int(h*0.28), int(w*0.70), int(h*0.82)))

# 18. CILEK PORTAKAL
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/iced_tea_clean_1788507880349.jpg',
              'public/images/items/cilek-portakal.jpg',
              (int(w*0.34), int(h*0.32), int(w*0.66), int(h*0.76)))

# 19. SODA (Sparkling glass crop)
crop_and_save('/Users/ocevizci/.gemini/antigravity-ide/brain/46537335-f27c-484a-98ee-75401f7e1253/turkish_coffee_clean_1788507785263.jpg',
              'public/images/items/soda.jpg',
              (int(w*0.70), int(h*0.45), int(w*0.92), int(h*0.70)))
