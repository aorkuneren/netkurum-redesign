"use client";

import styles from "./TrustSection.module.css";

const partners = [
  { name: "RAMS", logo: "https://netkurum.com/assets/images/referans_sirketler/rams.webp" },
  { name: "İtopya", logo: "https://netkurum.com/assets/images/referans_sirketler/itopya-logo.webp" },
  { name: "Hobiva", logo: "https://netkurum.com/assets/images/referans_sirketler/hobiva-logo.webp" },
  { name: "Arkom", logo: "https://netkurum.com/assets/images/referans_sirketler/arkom.webp" },
  { name: "TÜRGEV", logo: "https://netkurum.com/assets/images/referans_sirketler/turgev.webp" },
  { name: "Adsız", logo: "https://netkurum.com/assets/images/referans_sirketler/Ads%C4%B1z.webp" },
];

const stats = [
  { value: "10+", label: "Kurumsal Şirket", desc: "Netkurum altyapısını aktif olarak kullanıyor." },
  { value: "3000+", label: "Aktif Personel", desc: "Her gün sistem üzerinden işlemlerini gerçekleştiriyor." },
  { value: "%100", label: "Müşteri Memnuniyeti", desc: "7/24 destek ve kesintisiz hizmet garantisi." }
];

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
                  <h3>{stat.value}</h3>
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
