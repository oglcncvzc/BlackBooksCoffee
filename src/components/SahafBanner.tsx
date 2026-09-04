'use client';

import React from 'react';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { CAFE_INFO } from '@/data/menu';

export const SahafBanner: React.FC = () => {
  return (
    <section style={{
      maxWidth: '1100px',
      margin: '40px auto 20px',
      padding: '0 16px',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #2a1b11 0%, #1c120a 50%, #150e08 100%)',
        border: '1px solid var(--border-wood)',
        borderRadius: 'var(--radius-lg)',
        padding: '24px 20px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(223, 168, 75, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(223, 168, 75, 0.15)',
              border: '1px solid var(--accent-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-gold)',
            }}>
              <BookOpen size={18} />
            </div>
            <div>
              <span style={{
                fontSize: '11px',
                color: 'var(--accent-gold)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <Sparkles size={11} /> Sahaf &amp; Kitap Koleksiyonu
              </span>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '20px',
                color: '#fff',
                fontWeight: 700,
                margin: 0,
              }}>
                Nadir Kitaplar &amp; Özel Baskılar
              </h3>
            </div>
          </div>

          <p style={{
            fontSize: '13px',
            color: '#d4c3a3',
            lineHeight: 1.5,
            margin: 0,
          }}>
            Kahvenizi yudumlarken masanızda veya raflarımızdaki seçkilere göz atabilir, 
            online dükkanımızdan binlerce nadir ve imzalı kitaba <strong>NadirKitap</strong> üzerinden hemen ulaşabilirsiniz.
          </p>

          <div>
            <a
              href={CAFE_INFO.nadirKitap}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, #a66a38 0%, #784821 100%)',
                border: '1px solid var(--accent-gold)',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              }}
            >
              <span>NadirKitap Dükkanını İncele</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
