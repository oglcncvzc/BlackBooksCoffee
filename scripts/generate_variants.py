import os
from PIL import Image, ImageEnhance, ImageOps

os.makedirs('public/images/items', exist_ok=True)

def create_color_variant(base_path, output_path, hue_shift=0, contrast=1.0, brightness=1.0, tint_color=None, tint_factor=0.0):
    img = Image.open(base_path).convert('RGB')
    
    if tint_color and tint_factor > 0:
        # Create solid color overlay and blend
        color_layer = Image.new('RGB', img.size, tint_color)
        img = Image.blend(img, color_layer, tint_factor)
        
    if contrast != 1.0:
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(contrast)
        
    if brightness != 1.0:
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(brightness)
        
    img.save(output_path, quality=92)
    print(f"Created: {output_path}")

# Base images
espresso_base = 'public/images/espresso.jpg'
americano_base = 'public/images/americano.jpg'
latte_base = 'public/images/latte.jpg'
turkish_base = 'public/images/turkish-coffee.jpg'
iced_latte_base = 'public/images/iced-latte.jpg'
tea_base = 'public/images/tea.jpg'
iced_tea_base = 'public/images/iced-tea.jpg'

# 1. Espresso variants (different cup tones)
# Espresso (Charcoal/Dark original)
create_color_variant(espresso_base, 'public/images/items/espresso.jpg', contrast=1.05)
# Ristretto (Terracotta / Warm ceramic cup)
create_color_variant(espresso_base, 'public/images/items/ristretto.jpg', tint_color=(190, 110, 70), tint_factor=0.12, contrast=1.1)
# Lungo (Warm Slate / Olive ceramic tone)
create_color_variant(espresso_base, 'public/images/items/espresso-lungo.jpg', tint_color=(140, 150, 130), tint_factor=0.14, contrast=1.08)

# 2. Americano / Caffè Crema (different mug styles)
# Americano (Matte Black mug)
create_color_variant(americano_base, 'public/images/items/americano.jpg', contrast=1.05)
# Caffè Crema (Warm Cream / Tan mug)
create_color_variant(americano_base, 'public/images/items/caffe-crema.jpg', tint_color=(230, 200, 160), tint_factor=0.15, brightness=1.04)

# 3. Milk Coffees (Different cup ceramic colors)
# Cappuccino (Classic porcelain)
create_color_variant(latte_base, 'public/images/items/cappuccino.jpg', contrast=1.05)
# Caffè Latte (Warm Ochre / Sand ceramic)
create_color_variant(latte_base, 'public/images/items/caffe-latte.jpg', tint_color=(210, 165, 110), tint_factor=0.12, brightness=1.02)
# Flat White (Sage / Slate ceramic cup)
create_color_variant(latte_base, 'public/images/items/flat-white.jpg', tint_color=(135, 155, 145), tint_factor=0.15, contrast=1.1)
# Latte Macchiato (Warm Amber ceramic)
create_color_variant(latte_base, 'public/images/items/latte-macchiato.jpg', tint_color=(195, 145, 100), tint_factor=0.14, brightness=1.03)

# 4. Türk Kahvesi
create_color_variant(turkish_base, 'public/images/items/turk-kahvesi.jpg', contrast=1.05)

# 5. Soğuk Kahveler (Iced coffees)
# Iced Latte
create_color_variant(iced_latte_base, 'public/images/items/iced-latte.jpg', contrast=1.05)
# Iced Americano (Darker, amber ice tones)
create_color_variant(iced_latte_base, 'public/images/items/iced-americano.jpg', tint_color=(90, 60, 40), tint_factor=0.18, contrast=1.15)
# Espresso Tonic (Cool refreshing tint)
create_color_variant(iced_latte_base, 'public/images/items/espresso-tonic.jpg', tint_color=(160, 190, 185), tint_factor=0.12, brightness=1.05)

# 6. Çaylar
# Siyah Çay (Deep ruby amber tea)
create_color_variant(tea_base, 'public/images/items/demleme-siyah-cay.jpg', contrast=1.08)
# Yeşil Çay (Fresh herbal golden-green tea)
create_color_variant(tea_base, 'public/images/items/yesil-cay.jpg', tint_color=(170, 195, 120), tint_factor=0.20, brightness=1.06)

# 7. Soğuk Çaylar & İçecekler
# Şeftali & Çarkıfelek (Golden peach amber)
create_color_variant(iced_tea_base, 'public/images/items/seftali-carkifelek.jpg', contrast=1.05)
# Çilek & Portakal (Ruby strawberry citrus)
create_color_variant(iced_tea_base, 'public/images/items/cilek-portakal.jpg', tint_color=(225, 95, 80), tint_factor=0.18, contrast=1.1)
# Soda (Crisp mineral with lemon)
create_color_variant(iced_tea_base, 'public/images/items/soda.jpg', tint_color=(180, 215, 225), tint_factor=0.22, brightness=1.08)
# Su (Crystal pure water)
create_color_variant(turkish_base, 'public/images/items/su.jpg', tint_color=(190, 220, 235), tint_factor=0.15, brightness=1.05)

print("All item image variations created successfully!")
