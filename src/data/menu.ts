export interface MenuItem {
  id: string;
  name: string;
  category: 'kahveler' | 'soguk-kahveler' | 'caylar' | 'soguk-caylar' | 'soguk-icecekler';
  description?: string;
  notes?: string;
  price: number;
  variants?: { label: string; price: number }[];
  isPopular?: boolean;
  isSpecialty?: boolean;
  image: string;
}

export interface Category {
  id: MenuItem['category'] | 'all';
  name: string;
  englishName: string;
  icon: string;
  badge?: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'all',
    name: 'Tümü',
    englishName: 'All Drinks',
    icon: 'BookOpen',
  },
  {
    id: 'kahveler',
    name: 'Sıcak Kahveler',
    englishName: 'Hot Coffee',
    icon: 'Coffee',
    badge: '10 Çeşit',
  },
  {
    id: 'soguk-kahveler',
    name: 'Soğuk Kahveler',
    englishName: 'Iced Coffee',
    icon: 'CupSoda',
    badge: 'Ferahlatıcı',
  },
  {
    id: 'caylar',
    name: 'Sıcak Çaylar',
    englishName: 'Hot Teas',
    icon: 'Flame',
    badge: 'Taze Demleme',
  },
  {
    id: 'soguk-caylar',
    name: 'Soğuk Çaylar',
    englishName: 'Iced Teas',
    icon: 'Sparkles',
    badge: 'Meyveli',
  },
  {
    id: 'soguk-icecekler',
    name: 'Soğuk İçecekler',
    englishName: 'Cold Beverages',
    icon: 'Droplets',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- KAHVELER ---
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'kahveler',
    description: 'Özel harman taze çekim espresso.',
    notes: 'Single veya Double',
    price: 100,
    variants: [
      { label: 'Single', price: 100 },
      { label: 'Double', price: 200 },
    ],
    isPopular: true,
    image: '/images/items/espresso.jpg',
  },
  {
    id: 'ristretto',
    name: 'Ristretto',
    category: 'kahveler',
    description: 'Kısa ve yoğun ekstraksiyon espresso.',
    price: 100,
    image: '/images/items/ristretto.jpg',
  },
  {
    id: 'espresso-lungo',
    name: 'Espresso Lungo',
    category: 'kahveler',
    description: 'Daha uzun çekim, yumuşak içimli espresso.',
    price: 150,
    image: '/images/items/espresso-lungo.jpg',
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'kahveler',
    description: 'Sıcak su ile inceltilmiş taze espresso.',
    price: 200,
    isPopular: true,
    image: '/images/items/americano.jpg',
  },
  {
    id: 'caffe-crema',
    name: 'Caffè Crema',
    category: 'kahveler',
    description: 'Yumuşak içimli kremalı kahve.',
    price: 200,
    image: '/images/items/caffe-crema.jpg',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'kahveler',
    description: 'Taze espresso, sıcak süt ve kadifemsi süt köpüğü.',
    price: 250,
    isPopular: true,
    image: '/images/items/cappuccino.jpg',
  },
  {
    id: 'caffe-latte',
    name: 'Caffè Latte',
    category: 'kahveler',
    description: 'Buharda ısıtılmış süt ve taze espresso.',
    price: 250,
    isPopular: true,
    image: '/images/items/caffe-latte.jpg',
  },
  {
    id: 'latte-macchiato',
    name: 'Latte Macchiato',
    category: 'kahveler',
    description: 'Katmanlı sıcak süt, süt köpüğü ve taze espresso.',
    price: 250,
    image: '/images/items/latte-macchiato.jpg',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'kahveler',
    description: 'Çift shot espresso ve ince mikro köpüklü süt.',
    price: 250,
    image: '/images/items/flat-white.jpg',
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    category: 'kahveler',
    description: 'Bol köpüklü taze çekim Türk kahvesi. Su ile servis edilir.',
    price: 150,
    isPopular: true,
    image: '/images/items/turk-kahvesi.jpg',
  },

  // --- SOĞUK KAHVELER ---
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'soguk-kahveler',
    description: 'Soğuk su ve buz ile taze double espresso.',
    price: 200,
    isPopular: true,
    image: '/images/items/iced-americano.jpg',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'soguk-kahveler',
    description: 'Buzlu soğuk süt ve taze espresso.',
    price: 250,
    isPopular: true,
    image: '/images/items/iced-latte.jpg',
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic',
    category: 'soguk-kahveler',
    description: 'Tonik, buz ve double shot espresso.',
    price: 250,
    image: '/images/items/espresso-tonic.jpg',
  },

  // --- ÇAYLAR ---
  {
    id: 'demleme-siyah-cay',
    name: 'Demleme Siyah Çay',
    category: 'caylar',
    description: 'Taze demlenmiş klasik siyah çay.',
    notes: 'Küçük veya Büyük',
    price: 50,
    variants: [
      { label: 'Küçük (Bardak)', price: 50 },
      { label: 'Büyük (Kupa)', price: 75 },
    ],
    isPopular: true,
    image: '/images/items/demleme-siyah-cay.jpg',
  },
  {
    id: 'yesil-cay',
    name: 'Yeşil Çay',
    category: 'caylar',
    description: 'Taze demlenmiş yaprak yeşil çay.',
    price: 75,
    image: '/images/items/yesil-cay.jpg',
  },

  // --- SOĞUK ÇAYLAR ---
  {
    id: 'seftali-carkifelek',
    name: 'Şeftali & Çarkıfelek Meyvesi',
    category: 'soguk-caylar',
    description: 'Taze demlenmiş soğuk çay, serinletici çarkıfelek (passion fruit) ve şeftali lezzetiyle.',
    price: 100,
    isPopular: true,
    image: '/images/items/seftali-carkifelek.jpg',
  },
  {
    id: 'cilek-portakal',
    name: 'Çilek & Portakal',
    category: 'soguk-caylar',
    description: 'Ferahlatıcı etkisiyle sıcak günler için çilekli ve portakallı soğuk demlenmiş meyve çayı.',
    price: 100,
    isPopular: true,
    image: '/images/items/cilek-portakal.jpg',
  },

  // --- SOĞUK İÇECEKLER ---
  {
    id: 'soda',
    name: 'Soda (Maden Suyu)',
    category: 'soguk-icecekler',
    description: 'Doğal mineralli zengin kaynak maden suyu.',
    price: 75,
    image: '/images/items/soda.jpg',
  },
  {
    id: 'su',
    name: 'Doğal Kaynak Suyu',
    category: 'soguk-icecekler',
    description: 'Soğuk doğal kaynak suyu.',
    price: 30,
    image: '/images/items/su.jpg',
  },
];

export const CAFE_INFO = {
  name: 'BLACK BOOKS & COFFEE',
  subtitle: 'Kadıköy Moda • Sahaf & Butik Kahve',
  motto: '“Kitap kokusu ve kahve buğusunun kesiştiği yer.”',
  description: 'Moda’nın kalbinde; nadir ve yepyeni kitaplar, edebiyat sohbetleri, kitap kulüpleri ve özenle hazırlanan kahvelerle sıcacık bir kitabevi deneyimi.',
  instagram: 'https://www.instagram.com/blackbooksmoda?utm_source=qr&igsi=MTJweXI2cmc3eGl5Yg%3D%3D',
  nadirKitap: 'https://www.nadirkitap.com/kitapara.php?ara=aramayap&satici=2035979&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgUGwyBwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpx0xtNYUJK3CQofo_wV0dn5v7iQy98wAiJTiwaWCwrCv1HYriypau7ya8w0w_aem_Xw9CuWLVd9PU6ymZxYF-0A',
  yandexMaps: 'https://yandex.com.tr/maps/org/black_books_coffee/172021976894/',
  wifi: {
    name: 'Black Books Misafir',
    pass: 'bandini24',
  },
  founders: 'Burak Albayrak & Devrim Horlu',
  established: 'Şubat 2024',
  submissionEmail: 'dosyabasvurubaska@gmail.com',
  publishers: ['Muhtelif Kitap', 'Başka Kitap'],
  address: 'Caferağa Mah. Moda, Kadıköy / İstanbul',
  tags: ['Boutique Coffee', 'Nadir & İkinci El Kitap', 'Edebiyat Kulübü', 'Sıcak Atmosfer'],
};
