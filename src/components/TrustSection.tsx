"use client";

import styles from "./TrustSection.module.css";
import { useEffect, useState, useRef } from "react";

const partners = [
  { name: "RAMS", logo: "https://netkurum.com/assets/images/referans_sirketler/rams.webp" },
  { name: "İtopya", logo: "https://netkurum.com/assets/images/referans_sirketler/itopya-logo.webp" },
  { name: "Hobiva", logo: "https://netkurum.com/assets/images/referans_sirketler/hobiva-logo.webp" },
  { name: "Arkom", logo: "https://netkurum.com/assets/images/referans_sirketler/arkom.webp" },
  { name: "TÜRGEV", logo: "https://netkurum.com/assets/images/referans_sirketler/turgev.webp" },
  { name: "Adsız", logo: "https://netkurum.com/assets/images/referans_sirketler/Ads%C4%B1z.webp" },
];

const stats = [
  { value: 10, suffix: "+", label: "Kurumsal Şirket", desc: "Netkurum altyapısını aktif olarak kullanıyor." },
  { value: 3000, suffix: "+", label: "Aktif Personel", desc: "Her gün sistem üzerinden işlemlerini gerçekleştiriyor." },
  { value: 100, prefix: "%", label: "Müşteri Memnuniyeti", desc: "7/24 destek ve kesintisiz hizmet garantisi." }
];

const AnimatedCounter = ({ value, duration = 2000 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(value * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, value, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const TrustSection = () => {
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className={styles.trustSection}>
      <div className="container">
        {/* Partners Area */}
        <div className={styles.partnersArea}>
          <p className={styles.label}>Bize Güvenen Markalar</p>
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {marqueeItems.map((partner, index) => (
                <div key={index} className={styles.partner}>
                  <img src={partner.logo} alt={partner.name} className={styles.logoImage} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.separator}></div>

        {/* Stats Area */}
        <div className={styles.statsArea}>
          <div className={styles.grid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statContent}>
                  <h3>
                    {stat.prefix}<AnimatedCounter value={stat.value} />{stat.suffix}
                  </h3>
                  <h4>{stat.label}</h4>
                  <p>{stat.desc}</p>
                </div>
                {index !== stats.length - 1 && <div className={styles.divider}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
