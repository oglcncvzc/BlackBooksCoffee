'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryNav } from '@/components/CategoryNav';
import { MenuItemCard } from '@/components/MenuItemCard';
import { SahafBanner } from '@/components/SahafBanner';
import { AboutSection } from '@/components/AboutSection';
import { OrderTray, OrderItem } from '@/components/OrderTray';
import { Footer } from '@/components/Footer';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '@/data/menu';
import { Coffee } from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  // Filter items based on activeCategory and searchQuery
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Count items per category
  const itemCounts = useMemo(() => {
    const counts: Record<string, number> = { all: MENU_ITEMS.length };
    MENU_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Handlers for OrderTray
  const handleAddToOrder = (item: MenuItem, variant?: { label: string; price: number }) => {
    const orderItemId = variant ? `${item.id}-${variant.label}` : item.id;
    const unitPrice = variant ? variant.price : item.price;

    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === orderItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === orderItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: orderItemId,
          item,
          variantLabel: variant?.label,
          unitPrice,
          quantity: 1,
        },
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  // Group items by category for sectioned view when 'all' is selected and no search
  const categoriesToRender = useMemo<{ id: string; name: string; englishName?: string; items: MenuItem[] }[]>(() => {
    if (searchQuery.trim() !== '') {
      return [{ id: 'search-results', name: 'Arama Sonuçları', englishName: 'Search Results', items: filteredItems }];
    }
    if (activeCategory !== 'all') {
      const catObj = CATEGORIES.find((c) => c.id === activeCategory);
      return [
        {
          id: activeCategory,
          name: catObj ? catObj.name : activeCategory,
          englishName: catObj?.englishName,
          items: filteredItems,
        },
      ];
    }
    // All categories grouped
    return CATEGORIES.filter((c) => c.id !== 'all').map((cat) => ({
      id: cat.id,
      name: cat.name,
      englishName: cat.englishName,
      items: MENU_ITEMS.filter((item) => item.category === cat.id),
    }));
  }, [activeCategory, searchQuery, filteredItems]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header />

      {/* Hero Welcome & Instant Search */}
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Category Navigation Pills */}
      <CategoryNav
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        itemCounts={itemCounts}
      />

      {/* Main Content Area */}
      <main style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '24px 16px 40px',
        width: '100%',
        flex: 1,
      }}>
        {filteredItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(26, 23, 19, 0.4)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed rgba(212, 175, 122, 0.2)',
            margin: '20px 0',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(223, 168, 75, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px',
              color: 'var(--accent-gold)',
            }}>
              <Coffee size={26} />
            </div>
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '6px' }}>
              Sonuç Bulunamadı
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', maxWidth: '320px', margin: '0 auto 16px' }}>
              &quot;{searchQuery}&quot; aramasına uygun bir içecek bulunamadı.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'var(--accent-wood)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Tüm Menüyü Göster
            </button>
          </div>
        ) : (
          categoriesToRender.map((catGroup) => {
            if (catGroup.items.length === 0) return null;

            return (
              <section
                key={catGroup.id}
                style={{
                  marginBottom: '32px',
                }}
              >
                {/* Category Section Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '14px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid rgba(212, 175, 122, 0.15)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: 'var(--accent-gold)',
                      boxShadow: '0 0 8px var(--accent-gold)',
                    }} />
                    <h2 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(21px, 4vw, 25px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                      margin: 0,
                    }}>
                      {catGroup.name}
                    </h2>
                    {catGroup.englishName && (
                      <span style={{
                        fontSize: '13px',
                        color: 'var(--text-subtle)',
                        fontStyle: 'italic',
                      }}>
                        / {catGroup.englishName}
                      </span>
                    )}
                  </div>

                  <span style={{
                    fontSize: '12px',
                    color: 'var(--accent-gold)',
                    fontWeight: 600,
                  }}>
                    {catGroup.items.length} Çeşit
                  </span>
                </div>

                {/* Items Responsive Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
                  gap: '12px',
                }}>
                  {catGroup.items.map((item) => {
                    const countInOrder = orderItems
                      .filter((o) => o.item.id === item.id)
                      .reduce((sum, o) => sum + o.quantity, 0);

                    return (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAddToOrder={handleAddToOrder}
                        orderCount={countInOrder}
                      />
                    );
                  })}
                </div>
              </section>
            );
          })
        )}

        {/* About Us / Biz Kimiz Story & Dosya Başvurusu */}
        <AboutSection />

        {/* Sahaf / NadirKitap Spotlight */}
        <SahafBanner />
      </main>

      {/* Floating Table Order Summary Tray */}
      <OrderTray
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
