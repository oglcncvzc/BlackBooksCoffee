'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, BookOpen, MapPin, Navigation, Heart, Coffee } from 'lucide-react';
import { CAFE_INFO } from '@/data/menu';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#090807',
      borderTop: '1px solid var(--border-wood)',
      padding: '48px 16px 80px',
      position: 'relative',
      marginTop: '40px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
      }}>
        {/* Logo and Brand */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(223, 168, 75, 0.4)',
          background: '#000',
          boxShadow: '0 4px 20px rgba(0,0,0,0.8)',
        }}>
          <Image
            src="/images/logo.jpeg"
            alt="Black Books & Coffee"
            width={72}
            height={72}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>

        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#ffffff',
            marginBottom: '6px',
          }}>
            BLACK BOOKS &amp; COFFEE
          </h2>
          <p style={{
            fontSize: '13px',
            color: 'var(--accent-paper)',
            opacity: 0.8,
            maxWidth: '460px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            {CAFE_INFO.description}
          </p>
        </div>

        {/* Primary Outbound Links: Instagram, NadirKitap, Harita */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          width: '100%',
          maxWidth: '560px',
        }}>
          {/* Instagram Button */}
          <a
            href={CAFE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '1 1 160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.15) 0%, rgba(225, 48, 108, 0.05) 100%)',
              border: '1px solid rgba(225, 48, 108, 0.4)',
              color: '#f687b3',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <Instagram size={16} />
            <span>@blackbooksmoda</span>
          </a>

          {/* NadirKitap Button */}
          <a
            href={CAFE_INFO.nadirKitap}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '1 1 160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, #3e2617 0%, #26160c 100%)',
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold-light)',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <BookOpen size={16} />
            <span>NadirKitap Dükkanı</span>
          </a>

          {/* Yandex / Google Maps Button */}
          <a
            href={CAFE_INFO.yandexMaps}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: '1 1 160px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#e2e8f0',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <Navigation size={16} color="var(--accent-gold)" />
            <span>Haritada Aç &amp; Yorumlar</span>
          </a>
        </div>

        {/* Cafe Information Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          paddingTop: '12px',
        }}>
          {CAFE_INFO.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(212, 175, 122, 0.08)',
                color: 'var(--text-muted)',
                border: '1px solid rgba(212, 175, 122, 0.1)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Credits & Location */}
        <div style={{
          borderTop: '1px solid rgba(212, 175, 122, 0.1)',
          paddingTop: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontSize: '12px',
          color: 'var(--text-subtle)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--accent-gold-light)', fontWeight: 500 }}>{CAFE_INFO.founders}</span>
            <span>•</span>
            <a href="#hakkimizda" style={{ color: 'var(--accent-paper)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Hakkımızda &amp; Hikâyemiz
            </a>
            <span>•</span>
            <span style={{ color: 'var(--accent-gold)' }}>Kadıköy / Moda</span>
          </div>
          <div>
            © {new Date().getFullYear()} Black Books &amp; Coffee • Tüm Hakları Saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};
