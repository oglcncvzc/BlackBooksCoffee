'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { ShoppingBag, X, Trash2, Plus, Minus, Coffee, Sparkles, Eye, ArrowLeft, CheckCircle2 } from 'lucide-react';

export interface OrderItem {
  id: string;
  item: MenuItem;
  variantLabel?: string;
  unitPrice: number;
  quantity: number;
}

interface OrderTrayProps {
  orderItems: OrderItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearOrder: () => void;
}

export const OrderTray: React.FC<OrderTrayProps> = ({
  orderItems,
  onUpdateQuantity,
  onClearOrder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWaiterMode, setIsWaiterMode] = useState(false);

  const totalCount = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <>
      {/* Floating Bottom Bar */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '16px',
        right: '16px',
        maxWidth: '540px',
        margin: '0 auto',
        zIndex: 45,
      }}>
        <div
          onClick={() => {
            setIsOpen(true);
            setIsWaiterMode(false);
          }}
          style={{
            background: 'linear-gradient(135deg, #382214 0%, #1c1109 100%)',
            border: '1px solid var(--accent-gold)',
            borderRadius: 'var(--radius-full)',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.85), 0 0 20px rgba(223, 168, 75, 0.25)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'var(--accent-gold)',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '15px',
            }}>
              {totalCount}
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>
                Masa Siparişim
              </div>
              <div style={{ fontSize: '11px', color: 'var(--accent-paper)', opacity: 0.8 }}>
                Siparişini göstermek için tıkla
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--accent-gold-light)',
            }}>
              {totalPrice} ₺
            </div>
            <div style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.1)',
              fontSize: '12px',
              fontWeight: 600,
              color: '#fff',
            }}>
              İncele
            </div>
          </div>
        </div>
      </div>

      {/* FULLSCREEN WAITER PRESENTATION MODE (Devasa & Okunabilir Garson Ekranı) */}
      {isWaiterMode && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#0a0907',
            zIndex: 110,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '24px 20px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {/* Top Bar with Back Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid var(--border-wood)',
            paddingBottom: '16px',
          }}>
            <button
              onClick={() => setIsWaiterMode(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <ArrowLeft size={18} />
              <span>Geri Dön</span>
            </button>

            <div style={{
              fontSize: '12px',
              color: 'var(--accent-gold)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              ☕ SİPARİŞİNİ GÖSTER
            </div>

            <button
              onClick={() => {
                setIsWaiterMode(false);
                setIsOpen(false);
              }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Large Order Items Display */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '10px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(22px, 6vw, 28px)',
                color: '#ffffff',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.2,
              }}>
                MASA SİPARİŞİ
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--accent-gold)', marginTop: '4px' }}>
                Toplam {totalCount} Adet İçecek
              </p>
            </div>

            {orderItems.map((item) => (
              <div
                key={item.id}
                style={{
                  background: 'linear-gradient(135deg, #1c1813 0%, #14110d 100%)',
                  border: '2px solid var(--accent-gold)',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'var(--accent-gold)',
                    color: '#000',
                    fontSize: '22px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.quantity}x
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'clamp(18px, 5vw, 24px)',
                      fontWeight: 700,
                      color: '#ffffff',
                      lineHeight: 1.2,
                    }}>
                      {item.item.name}
                    </div>
                    {item.variantLabel && (
                      <div style={{
                        fontSize: '15px',
                        color: 'var(--accent-gold-light)',
                        fontWeight: 600,
                        marginTop: '2px',
                      }}>
                        Porsiyon: {item.variantLabel}
                      </div>
                    )}
                  </div>
                </div>

                <div style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--accent-paper)',
                  flexShrink: 0,
                }}>
                  {item.unitPrice * item.quantity} ₺
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Total & Actions */}
          <div style={{
            borderTop: '2px solid var(--border-wood)',
            paddingTop: '16px',
            background: '#0a0907',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '12px 16px',
              borderRadius: '12px',
              background: 'rgba(223, 168, 75, 0.08)',
              border: '1px solid rgba(223, 168, 75, 0.25)',
            }}>
              <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: 600 }}>
                Genel Toplam:
              </span>
              <span style={{
                fontSize: 'clamp(28px, 7vw, 36px)',
                fontWeight: 800,
                color: 'var(--accent-gold-light)',
                fontFamily: 'var(--font-sans)',
              }}>
                {totalPrice} ₺
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setIsWaiterMode(false)}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Siparişi Düzenle
              </button>

              <button
                onClick={() => {
                  onClearOrder();
                  setIsWaiterMode(false);
                  setIsOpen(false);
                }}
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #a66a38 0%, #5c3a21 100%)',
                  border: '1px solid var(--accent-gold)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}
              >
                <CheckCircle2 size={18} />
                <span>Sipariş Verildi</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REGULAR MODAL VIEW (Özet & Düzenleme Modalı) */}
      {isOpen && !isWaiterMode && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '500px',
              background: '#181512',
              border: '1px solid var(--border-wood)',
              borderRadius: '24px',
              padding: '24px 20px',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px rgba(0,0,0,0.9)',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            {/* Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(212, 175, 122, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Coffee size={20} color="var(--accent-gold)" />
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  Seçtiğiniz İçecekler ({totalCount})
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* List */}
            <div style={{
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '16px',
            }}>
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: 'rgba(11, 10, 8, 0.7)',
                    border: '1px solid rgba(212, 175, 122, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>
                      {item.item.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-gold)' }}>
                      {item.variantLabel ? item.variantLabel : 'Standart'} • {item.unitPrice} ₺
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'rgba(255,255,255,0.08)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff', minWidth: '18px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '6px',
                        background: 'var(--accent-wood)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Action */}
            <div style={{
              borderTop: '1px solid rgba(212, 175, 122, 0.15)',
              paddingTop: '14px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Tahmini Toplam:</span>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: 'var(--accent-gold-light)',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {totalPrice} ₺
                </span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={onClearOrder}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.25)',
                    color: '#f87171',
                    fontSize: '13px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                  }}
                >
                  <Trash2 size={16} />
                  <span>Temizle</span>
                </button>

                {/* Big Action: Switch to Fullscreen Waiter Display */}
                <button
                  onClick={() => setIsWaiterMode(true)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, #a66a38 0%, #5c3a21 100%)',
                    border: '1px solid var(--accent-gold)',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 15px rgba(223, 168, 75, 0.25)',
                  }}
                >
                  <Eye size={17} />
                  <span>Siparişini Göster (Büyük Ekran)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
