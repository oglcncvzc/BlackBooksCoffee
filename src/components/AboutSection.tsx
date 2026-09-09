'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Coffee, 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Feather, 
  Sparkles, 
  Compass, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { CAFE_INFO } from '@/data/menu';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const emailAddress = CAFE_INFO.submissionEmail || 'dosyabasvurubaska@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent('Başka Kitap - Dosya Başvurusu');
  const mailtoBody = encodeURIComponent(
    'Merhaba Başka Kitap Yayın Kurulu,\n\n' +
    'Yayımlanmasını arzu ettiğim dosyamı ve detaylarını aşağıda paylaşıyorum:\n\n' +
    'Ad Soyad: \n' +
    'Telefon: \n' +
    'Eser Türü (Roman / Öykü / Şiir / Deneme / Diğer): \n' +
    'Eserin Kısa Özeti / Tanıtımı: \n\n' +
    'Dosya Ektedir.\n\n' +
    'İyi çalışmalar dilerim.'
  );
  const mailtoLink = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <section 
      id="hakkimizda" 
      style={{
        maxWidth: '1100px',
        margin: '48px auto 24px',
        padding: '0 16px',
        scrollMarginTop: '80px',
      }}
    >
      <div style={{
        background: 'linear-gradient(145deg, #1f150e 0%, #160f09 50%, #0e0a07 100%)',
        border: '1px solid var(--border-wood)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 24px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 16px 40px rgba(0,0,0,0.65)',
      }}>
        {/* Subtle decorative background light */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '-40px',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(223, 168, 75, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-40px',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(166, 106, 56, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Section Header Badge & Title */}
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(223, 168, 75, 0.1)',
              border: '1px solid rgba(223, 168, 75, 0.3)',
              color: 'var(--accent-gold-light)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}>
              <Sparkles size={12} />
              <span>Hakkımızda &amp; Hikâyemiz</span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 4vw, 30px)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '10px',
            }}>
              BLACK BOOKS &amp; COFFEE
            </h2>

            <p style={{
              fontSize: '13px',
              color: 'var(--accent-gold)',
              fontWeight: 500,
              letterSpacing: '0.03em',
            }}>
              İki yazar ve editörün Kadıköy Moda’daki edebiyat &amp; kahve durağı
            </p>
          </div>

          {/* Founders & Story Intro Box */}
          <div style={{
            background: 'rgba(11, 9, 7, 0.65)',
            border: '1px solid rgba(212, 175, 122, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 22px',
            lineHeight: 1.7,
            color: '#e2d7c5',
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#fff' }}>Black Books &amp; Coffee</strong>, iki editör ve yazar,{' '}
              <span style={{ color: 'var(--accent-gold-light)', fontWeight: 600 }}>Burak Albayrak</span> ve{' '}
              <span style={{ color: 'var(--accent-gold-light)', fontWeight: 600 }}>Devrim Horlu</span> tarafından{' '}
              <strong>Şubat 2024’te Kadıköy’de</strong> kuruldu. O günden beri raflara biraz daha kitap, masalara biraz daha kahve, araya da bolca sohbet ekleyerek yolumuza devam ediyoruz.
            </p>

            <p style={{ margin: 0 }}>
              Buraya yalnızca kahve içmeye, yalnızca kitap bakmaya ya da ikisini de yapmadan biraz oyalanmaya gelebilirsiniz. Raflarımızdaki kitaplar, yazarlar ve edebiyata dair merak ettiğiniz hemen her konuda bize danışabilirsiniz. Kitap önermeyi seviyoruz; sevdiğimiz kitaplar hakkında konuşmayı da.
            </p>
          </div>

          {/* Publishing & Submissions Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '16px',
          }}>
            {/* Publisher Card: Muhtelif Kitap & Başka Kitap */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(42, 27, 17, 0.6) 0%, rgba(20, 14, 9, 0.8) 100%)',
              border: '1px solid var(--border-wood)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '14px',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
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
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                  }}>
                    Yayıncılıkla İç İçe
                  </h3>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#d4c3a3',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Black Books aynı zamanda yayıncılıkla iç içe bir yer.{' '}
                  <strong style={{ color: 'var(--accent-gold-light)' }}>Muhtelif Kitap</strong> ve{' '}
                  <strong style={{ color: 'var(--accent-gold-light)' }}>Başka Kitap</strong>’tan çıkan kitaplarımızı raflarımızda bulabilir, doğrudan yayınevinden temin edebilirsiniz.
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                paddingTop: '8px',
                borderTop: '1px dashed rgba(212, 175, 122, 0.15)',
              }}>
                <span style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(223, 168, 75, 0.12)',
                  color: 'var(--accent-gold-light)',
                  border: '1px solid rgba(223, 168, 75, 0.25)',
                  fontWeight: 600,
                }}>
                  📖 Muhtelif Kitap
                </span>
                <span style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(223, 168, 75, 0.12)',
                  color: 'var(--accent-gold-light)',
                  border: '1px solid rgba(223, 168, 75, 0.25)',
                  fontWeight: 600,
                }}>
                  ✍️ Başka Kitap
                </span>
              </div>
            </div>

            {/* Submissions Card: Dosya Başvurusu */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(62, 38, 23, 0.7) 0%, rgba(26, 16, 10, 0.9) 100%)',
              border: '1px solid rgba(223, 168, 75, 0.4)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(223, 168, 75, 0.2)',
                    border: '1px solid var(--accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)',
                  }}>
                    <Feather size={18} />
                  </div>
                  <div>
                    <span style={{
                      fontSize: '10px',
                      color: 'var(--accent-gold-light)',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'block',
                    }}>
                      Yazarlar &amp; Yeni Eserler
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0,
                    }}>
                      Dosya Başvurusu
                    </h3>
                  </div>
                </div>

                <p style={{
                  fontSize: '13px',
                  color: '#e5d7c3',
                  lineHeight: 1.55,
                  margin: 0,
                }}>
                  Üstelik hikâyenin bir sonraki kitabında sizin adınız da olabilir. Bir romanınız, öyküleriniz ya da yayımlanmasını istediğiniz bir dosyanız varsa <strong>Başka Kitap</strong>’a gönderebilirsiniz. Dosyanızı okur, değerlendirir; yollarımız kesişirse yayın sürecini birlikte konuşuruz.
                </p>
              </div>

              {/* Direct Action Area */}
              <div style={{
                background: 'rgba(10, 8, 6, 0.6)',
                border: '1px solid rgba(212, 175, 122, 0.25)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {/* Email Box with Copy */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', minWidth: 0 }}>
                    <Mail size={15} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                    <span style={{
                      fontSize: '12px',
                      color: '#fff',
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      wordBreak: 'break-all',
                    }}>
                      {emailAddress}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255,255,255,0.08)',
                      border: copied ? '1px solid #22c55e' : '1px solid rgba(255,255,255,0.15)',
                      color: copied ? '#86efac' : '#e2e8f0',
                      fontSize: '11px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                    }}
                    title="E-posta adresini kopyala"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
                  </button>
                </div>

                {/* Direct Send Mail Button */}
                <a
                  href={mailtoLink}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '9px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'linear-gradient(135deg, #a66a38 0%, #784821 100%)',
                    border: '1px solid var(--accent-gold)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                >
                  <Send size={13} />
                  <span>E-posta İle Dosya Gönder</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Warm Closing Motto */}
          <div style={{
            textAlign: 'center',
            paddingTop: '8px',
            borderTop: '1px solid rgba(212, 175, 122, 0.15)',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(16px, 3.5vw, 19px)',
              fontStyle: 'italic',
              color: 'var(--accent-paper)',
              margin: 0,
              lineHeight: 1.4,
            }}>
              “Kısacası kahveniz için de biz buradayız, bir sonraki kitabınız için de.”
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
