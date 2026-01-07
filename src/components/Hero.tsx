"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation values
  // Animation values
  const scrollRatio = Math.min(scrollY / 600, 1);
  
  // Start further apart (280px) and move slightly closer (240px) on scroll
  const offset = 280 - (scrollRatio * 40); 
  const rotate = 20 - (scrollRatio * 10);
  const translateY = 40 + (scrollRatio * 60); // Phones move down as you scroll
  const sideY = 80 - (scrollRatio * 40); // Side phones move up/down relative to center

  // Video Modal State
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.trustBadge}>
              <div className={styles.avatarStack}>
                <div className={styles.avatar} style={{background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)'}}></div>
                <div className={styles.avatar} style={{background: 'linear-gradient(135deg, #ffc107, #ff9800)'}}></div>
                <div className={styles.avatar} style={{background: 'linear-gradient(135deg, #4caf50, #8bc34a)'}}></div>
              </div>
              <span>500+ Şirket Tarafından Tercih Ediliyor</span>
            </div>
            
            <h1>
              Yeni Nesil <br />Personel Takip Yazılımı
            </h1>
            
            <p className={styles.subtitle}>
              Netkurum, İnsan Kaynakları süreçlerinizi tek platformda yönetmenizi sağlar. Çalışan yönetimi, izin takibi, vardiya planlaması, avans ve masraf yönetimi gibi işlemleri kolayca dijitalleştirin. Kullanıcı dostu arayüzü ve mobil uygulamasıyla iş süreçlerinizi hızlandırın, verimliliğinizi artırın!
            </p>

            <div className={styles.actions}>
              <button className="btn btn-primary">Hemen Başlayın</button>
              <button className="btn btn-text" onClick={() => setIsVideoOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                </svg>
                Tanıtım Videosu
              </button>
            </div>
          </div>

          <div className={styles.mockups}>
            <div className={styles.phoneGroup}>
              <div 
                className={`${styles.phone} ${styles.phoneLeft}`}
                style={{ 
                  transform: `translateX(calc(-50% - ${offset}px)) translateY(${sideY}px) rotate(-${rotate}deg)` 
                }}
              >
                <Image src="/phone-left.png" alt="Netkurum Sol Ekran" width={280} height={580} priority />
              </div>
              <div 
                className={`${styles.phone} ${styles.phoneCenter}`}
                style={{ 
                  transform: `translateX(-50%) translateY(${translateY}px)` 
                }}
              >
                <Image src="/phone-center.png" alt="Netkurum Ana Ekran" width={320} height={660} priority />
              </div>
              <div 
                className={`${styles.phone} ${styles.phoneRight}`}
                style={{ 
                  transform: `translateX(calc(-50% + ${offset}px)) translateY(${sideY}px) rotate(${rotate}deg)` 
                }}
              >
                <Image src="/phone-right.png" alt="Netkurum Sağ Ekran" width={280} height={580} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className={styles.videoModal} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.videoWrapperContainer}>
            <button className={styles.closeButton} onClick={(e) => {
              e.stopPropagation();
              setIsVideoOpen(false);
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className={styles.videoWrapper}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/B8mHT5gjSDQ?autoplay=1" 
                title="Tanıtım Videosu" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
