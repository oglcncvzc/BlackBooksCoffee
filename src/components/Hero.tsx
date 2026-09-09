'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Sparkles, BookOpen } from 'lucide-react';
import { CAFE_INFO } from '@/data/menu';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <section style={{
      position: 'relative',
      padding: '36px 16px 24px',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(212, 175, 122, 0.15)',
      background: 'linear-gradient(180deg, #16120e 0%, #0d0b09 100%)',
    }}>
      {/* Background Wood Grain Gradient Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 20%, rgba(166, 106, 56, 0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Top Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 14px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(223, 168, 75, 0.08)',
          border: '1px solid rgba(223, 168, 75, 0.25)',
          color: 'var(--accent-gold-light)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          <Sparkles size={11} />
          <span>Sahaf &amp; Butik Kahve • Moda</span>
        </div>

        {/* Official Logo Showcase with Hakkımızda Button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '18px',
        }}>
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '2px solid rgba(223, 168, 75, 0.35)',
            boxShadow: '0 12px 30px rgba(0,0,0,0.8), 0 0 20px rgba(166, 106, 56, 0.2)',
            background: '#000',
            position: 'relative',
          }}>
            <Image
              src="/images/logo.jpeg"
              alt="Black Books & Coffee"
              width={90}
              height={90}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Hakkımızda Button Under Logo */}
          <a
            href="#hakkimizda"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 20px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(28, 22, 16, 0.85)',
              border: '1px solid rgba(212, 175, 122, 0.35)',
              color: '#fbf9f5',
              fontSize: '13px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
              transition: 'all 0.25s ease',
            }}
          >
            <BookOpen size={14} color="var(--accent-gold)" />
            <span>Hakkımızda</span>
          </a>
        </div>

        {/* Main Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(24px, 5vw, 34px)',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '8px',
        }}>
          BLACK BOOKS &amp; COFFEE
        </h1>

        {/* Motto */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(15px, 3.5vw, 18px)',
          color: 'var(--accent-paper)',
          fontStyle: 'italic',
          lineHeight: 1.4,
          maxWidth: '520px',
          margin: '0 auto 20px',
          opacity: 0.9,
        }}>
          {CAFE_INFO.motto}
        </p>

        {/* Search Bar */}
        <div style={{
          position: 'relative',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          <div style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--accent-gold)',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Search size={17} />
          </div>
          <input
            type="text"
            placeholder="İçecek ara (Espresso, Latte, Çay, Tonic...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 18px 12px 44px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(26, 23, 19, 0.9)',
              border: '1px solid rgba(212, 175, 122, 0.25)',
              color: '#fff',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
