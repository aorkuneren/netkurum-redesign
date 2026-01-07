"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./InteractiveFeatures.module.css";

const features = [
  {
    id: 1,
    title: "Modern Başlangıç",
    description: "İşletmenizin kurumsal kimliği ile özelleştirilmiş, hızlı ve etkileyici bir giriş deneyimi.",
    image: "/feature-splash.png",
    icon: "🚀",
    side: "left"
  },
  {
    id: 2,
    title: "Güvenli Giriş",
    description: "Kullanıcı dostu arayüz ve gelişmiş güvenlik katmanları ile yetkisiz erişimi engelleyin.",
    image: "/feature-login.png",
    icon: "🔒",
    side: "left"
  },
  {
    id: 3,
    title: "Özlük İşlemleri",
    description: "Personel bilgilerini, belgelerini ve geçmiş izinlerini tek bir yerden kolayca görüntüleyin.",
    image: "/feature-menu.png",
    icon: "📁",
    side: "left"
  },
  {
    id: 4,
    title: "Anlık Takip",
    description: "Mesai başlangıç ve bitişlerini, personelin konum ve durum bilgilerini anlık olarak izleyin.",
    image: "/feature-dashboard.png",
    icon: "⏱️",
    side: "right"
  },
  {
    id: 5,
    title: "Modüler İK Çözümleri",
    description: "İzin, avans, masraf ve diğer tüm İK süreçlerini tek bir merkezden kolayca yönetin.",
    image: "/feature-menu.png",
    icon: "📱",
    side: "right"
  },
  {
    id: 6,
    title: "Yönetici Analitiği",
    description: "Ekibinizin performansını ve verimliliğini artıran detaylı grafik ve raporlara anında erişin.",
    image: "/feature-dashboard.png",
    icon: "📊",
    side: "right"
  }
];

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <span>⭐</span> Avantajlarımız
          </div>
          <h2>Netkurum Mobil Deneyimini Keşfedin</h2>
          <p>Yenilikçi arayüzler ve güçlü modüller ile İK süreçlerinizi cebinize sığdırın.</p>
        </div>

        <div className={styles.grid}>
          {/* Left Column */}
          <div className={styles.column}>
            {features.filter(f => f.side === "left").map(feature => (
              <div 
                key={feature.id}
                className={`${styles.card} ${activeFeature.id === feature.id ? styles.active : ""}`}
                onMouseEnter={() => setActiveFeature(feature)}
                onClick={() => setActiveFeature(feature)}
              >
                <div className={styles.icon}>{feature.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Mockup with iPhone Frame */}
          <div className={styles.mockupContainer}>
            <div className={styles.iphoneWrapper}>
              <Image 
                src="/iphone-frame.png" 
                alt="iPhone Frame"
                width={360}
                height={730}
                className={styles.frame}
              />
              <div className={styles.screenContent}>
                <Image 
                  key={activeFeature.id}
                  src={activeFeature.image} 
                  alt={activeFeature.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.screenImage}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.column}>
            {features.filter(f => f.side === "right").map(feature => (
              <div 
                key={feature.id}
                className={`${styles.card} ${activeFeature.id === feature.id ? styles.active : ""}`}
                onMouseEnter={() => setActiveFeature(feature)}
                onClick={() => setActiveFeature(feature)}
              >
                <div className={styles.icon}>{feature.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;
