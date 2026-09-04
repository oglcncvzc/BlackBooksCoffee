'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { Plus, Check, Sparkles } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToOrder: (item: MenuItem, variant?: { label: string; price: number }) => void;
  orderCount: number;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onAddToOrder,
  orderCount,
}) => {
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : undefined
  );
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToOrder(item, selectedVariant);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  const currentPrice = selectedVariant ? selectedVariant.price : item.price;

  return (
    <div style={{
      background: 'linear-gradient(135deg, #181511 0%, #120f0c 100%)',
      border: '1px solid rgba(212, 175, 122, 0.16)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
      transition: 'border-color 0.2s ease, transform 0.2s ease',
      position: 'relative',
    }}>
      {/* Top Details & Optional Subtle Thumbnail */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
            marginBottom: '4px',
            flexWrap: 'wrap',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '19px',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.25,
            }}>
              {item.name}
            </h3>

            {item.notes && (
              <span style={{
                fontSize: '11px',
                color: 'var(--accent-gold)',
                fontWeight: 500,
                fontStyle: 'italic',
              }}>
                {item.notes}
              </span>
            )}

            {item.isPopular && (
              <span style={{
                fontSize: '10px',
                padding: '1px 6px',
                borderRadius: '4px',
                background: 'rgba(223, 168, 75, 0.15)',
                color: 'var(--accent-gold)',
                fontWeight: 600,
                border: '1px solid rgba(223, 168, 75, 0.25)',
              }}>
                Popüler
              </span>
            )}
          </div>

          {/* Description */}
          {item.description && (
            <p style={{
              fontSize: '12.5px',
              color: 'var(--text-muted)',
              lineHeight: 1.35,
              marginTop: '2px',
            }}>
              {item.description}
            </p>
          )}
        </div>

        {/* Elegant, Non-exaggerated Thumbnail Image */}
        {item.image && (
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 122, 0.25)',
            background: '#0a0908',
            flexShrink: 0,
            position: 'relative',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
          }}>
            <Image
              src={item.image}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="64px"
            />
          </div>
        )}
      </div>

      {/* Variants Selector */}
      {item.variants && (
        <div style={{
          display: 'flex',
          gap: '6px',
          background: 'rgba(11, 10, 8, 0.6)',
          padding: '3px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(212, 175, 122, 0.12)',
        }}>
          {item.variants.map((v) => {
            const isSelected = selectedVariant?.label === v.label;
            return (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(v)}
                style={{
                  flex: 1,
                  padding: '5px 8px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: isSelected ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isSelected ? 'linear-gradient(135deg, #a66a38 0%, #5c3a21 100%)' : 'transparent',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid transparent',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{v.label}</span>
                <span style={{ fontWeight: 600 }}>{v.price}₺</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Bottom Price & Add Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '6px',
        borderTop: '1px solid rgba(212, 175, 122, 0.1)',
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: 700,
          fontFamily: 'var(--font-sans)',
          color: 'var(--accent-gold-light)',
          lineHeight: 1,
        }}>
          {currentPrice} <span style={{ fontSize: '14px' }}>₺</span>
        </div>

        <button
          onClick={handleAdd}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)',
            background: justAdded
              ? '#2e5c38'
              : 'linear-gradient(135deg, #3e2617 0%, #2a1b11 100%)',
            border: justAdded
              ? '1px solid #4ade80'
              : '1px solid var(--border-wood)',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          {justAdded ? (
            <>
              <Check size={13} color="#4ade80" />
              <span>Listeye Eklendi</span>
            </>
          ) : (
            <>
              <Plus size={13} color="var(--accent-gold)" />
              <span>{orderCount > 0 ? `Sipariş Listesine Ekle (${orderCount})` : 'Sipariş Listesine Ekle'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
