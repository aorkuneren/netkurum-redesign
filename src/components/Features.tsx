import styles from "./Features.module.css";

const Features = () => {
  const features = [
    {
      title: "Mobil Giriş-Çıkış",
      description: "GPS ve QR kod ile personelleriniz sahadan veya ofisten anlık bildirimde bulunur.",
      icon: "📍"
    },
    {
      title: "Otomatik Puantaj",
      description: "Manuel puantaj hesaplama derdine son. Sistem her şeyi otomatik raporlar.",
      icon: "📊"
    },
    {
      title: "Vardiya Planlama",
      description: "Esnek vardiya düzenleri ile karmaşık operasyonları saniyeler içinde planlayın.",
      icon: "📅"
    },
    {
      title: "İzin Talepleri",
      description: "Çalışanlar mobil uygulama üzerinden saniyeler içinde izin talebi oluşturabilir.",
      icon: "🏖️"
    },
    {
      title: "Dijital Özlük",
      description: "Tüm personel dosyalarını KVKK uyumlu dijital arşivlerde güvenle saklayın.",
      icon: "📂"
    },
    {
      title: "Avans & Masraf",
      description: "Masraf taleplerini dijitalleştirin, muhasebe süreçlerinizi hızlandırın.",
      icon: "💸"
    }
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>Öne Çıkan Özellikler</div>
          <h2>İhtiyacınız Olan Her Şey</h2>
          <p>Netkurum ile işletmenizin tüm süreçlerini uçtan uca yönetin.</p>
        </div>
        
        <div className="bento-grid">
          {features.map((f, i) => (
            <div key={i} className="card">
              <div className={styles.iconBox}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
