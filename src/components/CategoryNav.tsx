'use client';

import React from 'react';
import { CATEGORIES, Category, MenuItem } from '@/data/menu';
import { BookOpen, Coffee, CupSoda, Flame, Sparkles, Droplets } from 'lucide-react';

interface CategoryNavProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  itemCounts: Record<string, number>;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategory,
  onSelectCategory,
  itemCounts,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <Coffee size={15} />;
      case 'CupSoda':
        return <CupSoda size={15} />;
      case 'Flame':
        return <Flame size={15} />;
      case 'Sparkles':
        return <Sparkles size={15} />;
      case 'Droplets':
        return <Droplets size={15} />;
      default:
        return <BookOpen size={15} />;
    }
  };

  return (
    <div style={{
      position: 'sticky',
      top: '63px',
      zIndex: 40,
      background: 'rgba(11, 10, 8, 0.94)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(212, 175, 122, 0.12)',
      padding: '10px 0',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 16px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        display: 'flex',
        gap: '8px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = itemCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                flexShrink: 0,
                background: isActive
                  ? 'linear-gradient(135deg, #422816 0%, #29180c 100%)'
                  : 'rgba(26, 23, 19, 0.6)',
                color: isActive ? 'var(--accent-gold-light)' : 'var(--text-muted)',
                border: isActive
                  ? '1px solid var(--accent-gold)'
                  : '1px solid rgba(212, 175, 122, 0.12)',
                boxShadow: isActive ? '0 4px 15px rgba(223, 168, 75, 0.15)' : 'none',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              <span style={{ color: isActive ? 'var(--accent-gold)' : 'var(--text-subtle)' }}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.name}</span>
              {count > 0 && (
                <span style={{
                  fontSize: '11px',
                  padding: '1px 6px',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(223, 168, 75, 0.25)' : 'rgba(255,255,255,0.06)',
                  color: isActive ? '#fff' : 'var(--text-subtle)',
                  fontWeight: 600,
                }}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
