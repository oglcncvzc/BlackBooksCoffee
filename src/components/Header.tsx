'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Wifi, Instagram, BookOpen, MapPin, Copy, Check } from 'lucide-react';
import { CAFE_INFO } from '@/data/menu';

export const Header: React.FC = () => {
  const [wifiCopied, setWifiCopied] = useState(false);
  const [showWifiModal, setShowWifiModal] = useState(false);

  const copyWifi = () => {
    navigator.clipboard.writeText(CAFE_INFO.wifi.pass);
    setWifiCopied(true);
    setTimeout(() => setWifiCopied(false), 2500);
  };

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(11, 10, 8, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(212, 175, 122, 0.15)',
        padding: '10px 16px',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Brand Logo & Title */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(223, 168, 75, 0.3)',
              background: '#000',
              flexShrink: 0,
              boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}>
              <Image
                src="/images/logo.jpeg"
                alt="Black Books Logo"
                width={42}
                height={42}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                priority
              />
            </div>
            <div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#fff',
                lineHeight: 1.2,
                margin: 0,
              }}>
                BLACK BOOKS
              </h1>
              <span style={{
                fontSize: '11px',
                color: 'var(--accent-gold)',
                letterSpacing: '0.05em',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <MapPin size={10} /> Moda, Kadıköy
              </span>
            </div>
          </a>

          {/* Quick Action Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* WiFi Quick Button */}
            <button
              onClick={() => setShowWifiModal(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(212, 175, 122, 0.08)',
                border: '1px solid rgba(212, 175, 122, 0.2)',
                color: 'var(--accent-gold-light)',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              title="Wi-Fi Bilgisi"
            >
              <Wifi size={14} />
              <span style={{ display: 'inline' }}>Wi-Fi</span>
            </button>

            {/* NadirKitap Direct Link */}
            <a
              href={CAFE_INFO.nadirKitap}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, #3e2617 0%, #2a1b11 100%)',
                border: '1px solid var(--border-wood)',
                color: '#f5ede0',
                fontSize: '12px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              }}
            >
              <BookOpen size={14} color="var(--accent-gold)" />
              <span>NadirKitap</span>
            </a>

            {/* Instagram Quick Link */}
            <a
              href={CAFE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                transition: 'all 0.2s ease',
              }}
              title="Instagram'da Takip Et"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Wi-Fi Info Modal */}
      {showWifiModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }} onClick={() => setShowWifiModal(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '360px',
              background: '#181512',
              border: '1px solid var(--border-wood)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: 'rgba(223, 168, 75, 0.1)',
              border: '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: 'var(--accent-gold)',
            }}>
              <Wifi size={28} />
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              color: '#fff',
              marginBottom: '6px',
            }}>
              Mekan Wi-Fi
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Black Books & Coffee misafir ağı
            </p>

            <div style={{
              background: '#0d0c0a',
              border: '1px solid rgba(212, 175, 122, 0.15)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              marginBottom: '16px',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', marginBottom: '2px' }}>AĞ ADI (SSID)</div>
              <div style={{ fontSize: '15px', color: '#fff', fontWeight: 600, marginBottom: '10px' }}>
                {CAFE_INFO.wifi.name}
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-subtle)', marginBottom: '2px' }}>ŞİFRE</div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '15px',
                color: 'var(--accent-gold-light)',
                fontWeight: 600,
                fontFamily: 'monospace',
              }}>
                <span>{CAFE_INFO.wifi.pass}</span>
                <button
                  onClick={copyWifi}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: wifiCopied ? '#2e5c38' : 'rgba(223, 168, 75, 0.15)',
                    color: wifiCopied ? '#a3e635' : 'var(--accent-gold)',
                    fontSize: '12px',
                    cursor: 'pointer',
                  }}
                >
                  {wifiCopied ? <Check size={14} /> : <Copy size={14} />}
                  {wifiCopied ? 'Kopyalandı' : 'Kopyala'}
                </button>
              </div>
            </div>

            <button
              onClick={() => setShowWifiModal(false)}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, #a66a38 0%, #5c3a21 100%)',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
};
