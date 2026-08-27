import styles from "./Partners.module.css";

const partners = [
  { name: "RAMS", logo: "https://netkurum.com/assets/images/referans_sirketler/rams.webp" },
  { name: "İtopya", logo: "https://netkurum.com/assets/images/referans_sirketler/itopya-logo.webp" },
  { name: "Hobiva", logo: "https://netkurum.com/assets/images/referans_sirketler/hobiva-logo.webp" },
  { name: "Arkom", logo: "https://netkurum.com/assets/images/referans_sirketler/arkom.webp" },
  { name: "TÜRGEV", logo: "https://netkurum.com/assets/images/referans_sirketler/turgev.webp" },
  { name: "Adsız", logo: "https://netkurum.com/assets/images/referans_sirketler/Ads%C4%B1z.webp" },
];

const Partners = () => {
  // Triple the partners for a seamless loop
  const marqueeItems = [...partners, ...partners, ...partners];

  return (
    <section className={styles.partners}>
      <div className="container">
        <p className={styles.title}>500+’den fazla şirket Netkurum’a güveniyor</p>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {marqueeItems.map((partner, index) => (
              <div key={index} className={styles.partner}>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
