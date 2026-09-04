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
    description: 'Yoğun gövdeli, kadifemsi kremalı özel harman single origin espresso.',
    notes: 'Single veya Double',
    price: 100,
    variants: [
      { label: 'Single', price: 100 },
      { label: 'Double', price: 200 },
    ],
    isPopular: true,
    isSpecialty: true,
  },
  {
    id: 'ristretto',
    name: 'Ristretto',
    category: 'kahveler',
    description: 'Espresso çekiminin ilk ve en tatlı, yoğun aromalı kısa ekstraksiyonu.',
    notes: 'Kısa & Yoğun Gövde',
    price: 100,
  },
  {
    id: 'espresso-lungo',
    name: 'Espresso Lungo',
    category: 'kahveler',
    description: 'Daha uzun süreli ekstraksiyon ile yumuşak içimli ve zengin notalı espresso.',
    notes: 'Dengeli & Uzun Çekim',
    price: 150,
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'kahveler',
    description: 'Sıcak su ile inceltilmiş çift shot taze espresso lezzeti.',
    notes: 'Klasik Filtre Hissi',
    price: 200,
    isPopular: true,
  },
  {
    id: 'caffe-crema',
    name: 'Caffè Crema',
    category: 'kahveler',
    description: 'İpeksi altın kreması ve hafif kavrum dengesiyle özel İsviçre/Kuzey usulü fincan.',
    notes: 'Yumuşak & Kremalı',
    price: 200,
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'kahveler',
    description: 'Eşit oranda taze espresso, sıcak süt ve yoğun mikro süt köpüğü.',
    notes: 'Kremamsı Köpük',
    price: 250,
    isPopular: true,
  },
  {
    id: 'caffe-latte',
    name: 'Caffè Latte',
    category: 'kahveler',
    description: 'Yumuşak buharda ısıtılmış bol süt ve taze espresso uyumu.',
    notes: 'Sütlü & İpeksi',
    price: 250,
    isPopular: true,
  },
  {
    id: 'latte-macchiato',
    name: 'Latte Macchiato',
    category: 'kahveler',
    description: 'Katmanlı sıcak süt, süt köpüğü ve üzerinden dökülen taze espresso lekesi.',
    notes: 'Üç Katmanlı Estetik',
    price: 250,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'kahveler',
    description: 'Çift shot ristretto üzerine ince kadife mikro-köpüklü süt.',
    notes: 'Güçlü Kahve & İnce Köpük',
    price: 250,
    isSpecialty: true,
  },
  {
    id: 'turk-kahvesi',
    name: 'Türk Kahvesi',
    category: 'kahveler',
    description: 'Geleneksel bakır cezvede ağır ateşte pişirilen bol köpüklü taze çekim Türk kahvesi. Su ve lokum ile servis edilir.',
    notes: 'Geleneksel & Bol Köpüklü',
    price: 150,
    isPopular: true,
  },

  // --- SOĞUK KAHVELER ---
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'soguk-kahveler',
    description: 'Buz küpleri ve soğuk filtrelenmiş su üzerine dökülen taze double espresso.',
    notes: 'Ferah & Sert',
    price: 200,
    isPopular: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'soguk-kahveler',
    description: 'Buzlu soğuk taze süt ve üzerine dökülen aromatik espresso.',
    notes: 'Serinletici & Sütlü',
    price: 250,
    isPopular: true,
  },
  {
    id: 'espresso-tonic',
    name: 'Espresso Tonic',
    category: 'soguk-kahveler',
    description: 'Kaliteli premium tonik, taze buz ve üzerine double shot espresso katmanı.',
    notes: 'Narenciye & Gazlı Kahve',
    price: 250,
    isSpecialty: true,
  },

  // --- ÇAYLAR ---
  {
    id: 'demleme-siyah-cay',
    name: 'Demleme Siyah Çay',
    category: 'caylar',
    description: 'Rize seçme çay yapraklarından taze demlenen berrak ve tavşan kanı klasik çay.',
    notes: 'İnce belli veya kupa bardakta',
    price: 50,
    variants: [
      { label: 'Küçük (Bardak)', price: 50 },
      { label: 'Büyük (Kupa)', price: 75 },
    ],
    isPopular: true,
  },
  {
    id: 'yesil-cay',
    name: 'Yeşil Çay',
    category: 'caylar',
    description: 'Hafif ve antioksidan zengini yaprak yeşil çay demlemesi.',
    notes: 'Hafif & Dingin',
    price: 75,
  },

  // --- SOĞUK ÇAYLAR ---
  {
    id: 'seftali-carkifelek',
    name: 'Şeftali & Çarkıfelek Meyvesi',
    category: 'soguk-caylar',
    description: 'Doğal meyve püreleri, taze demlenmiş soğuk çay ve ferahlatıcı çarkıfelek (passion fruit) aroması.',
    notes: 'Egzotik & Tatlı Ekşi',
    price: 100,
    isPopular: true,
    isSpecialty: true,
  },
  {
    id: 'cilek-portakal',
    name: 'Çilek & Portakal',
    category: 'soguk-caylar',
    description: 'Taze portakal dilimleri, çilek aroması ve soğuk demlenmiş meyve çayı.',
    notes: 'C Vitamini & Canlandırıcı',
    price: 100,
    isPopular: true,
  },

  // --- SOĞUK İÇECEKLER ---
  {
    id: 'soda',
    name: 'Soda (Maden Suyu)',
    category: 'soguk-icecekler',
    description: 'Doğal mineralli zengin kaynak maden suyu. Limon dilimi ile servis edilir.',
    notes: 'Doğal Maden Suyu',
    price: 75,
  },
  {
    id: 'su',
    name: 'Doğal Kaynak Suyu',
    category: 'soguk-icecekler',
    description: 'Cam şişede soğuk doğal kaynak suyu.',
    notes: 'Cam Şişe',
    price: 30,
  },
];

export const CAFE_INFO = {
  name: 'BLACK BOOKS & COFFEE',
  subtitle: 'Kadıköy Moda • Sahaf & Butik Kahve',
  motto: '“Kitap kokusu ve kahve buğusunun kesiştiği yer.”',
  description: 'Moda’nın kalbinde; nadir kitaplar, edebiyat sohbetleri, kitap kulüpleri ve özenle hazırlanan artisanal kahvelerle sıcacık bir sahaf deneyimi.',
  instagram: 'https://www.instagram.com/blackbooksmoda?utm_source=qr&igsi=MTJweXI2cmc3eGl5Yg%3D%3D',
  nadirKitap: 'https://www.nadirkitap.com/kitapara.php?ara=aramayap&satici=2035979&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRzdgUGwyBwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABpx0xtNYUJK3CQofo_wV0dn5v7iQy98wAiJTiwaWCwrCv1HYriypau7ya8w0w_aem_Xw9CuWLVd9PU6ymZxYF-0A',
  yandexMaps: 'https://yandex.com.tr/maps/org/black_books_coffee/172021976894/',
  wifi: {
    name: 'BlackBooks_Guest',
    pass: 'blackbooksmoda',
  },
  founders: 'Burak',
  address: 'Caferağa Mah. Moda, Kadıköy / İstanbul',
  tags: ['Boutique Coffee', 'Nadir & İkinci El Kitap', 'Edebiyat Kulübü', 'Sıcak Atmosfer'],
};
