import styles from "./FeatureShowcase.module.css";

const features = [
  {
    title: "Vardiya Yönetimi",
    description: "Karmaşık vardiya düzenlerini dakikalar içinde oluşturun ve personelinize anında iletin.",
    icon: "📅",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Vardiya+Takvimi"
  },
  {
    title: "İzin ve Talep Platformu",
    description: "Tüm izin, avans ve masraf taleplerini dijital onay mekanizmasıyla hatasız yönetin.",
    icon: "📝",
    image: "https://placehold.co/600x400/000000/ffffff?text=Izin+Yonetimi"
  },
  {
    title: "Konum Bazlı Takip",
    description: "Saha personelinizin giriş-çıkışlarını GPS doğrulaması ile güvenli bir şekilde takip edin.",
    icon: "📍",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=GPS+Konum+Takibi"
  },
  {
    title: "Anlık Push Bildirimler",
    description: "Personelinize duyuruları, vardiya değişikliklerini ve onayları anlık bildirimle ulaştırın.",
    icon: "🔔",
    image: "https://placehold.co/600x400/000000/ffffff?text=Mobil+Bildirimler"
  },
  {
    title: "Bordro ve Özlük",
    description: "Personel belgelerini güvenle saklayın ve aylık bordro süreçlerini otomatikleştirin.",
    icon: "📑",
    image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Ozluk+Belgeleri"
  },
  {
    title: "Gelişmiş Raporlama",
    description: "İşletmenizin verimlilik ve devamsızlık oranlarını detaylı grafiklerle analiz edin.",
    icon: "📈",
    image: "https://placehold.co/600x400/000000/ffffff?text=Analitik+Raporlar"
  }
];

const FeatureShowcase = () => {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <span>🚀</span> Özellikler
          </div>
          <h2>İşletmeniz İçin Uçtan Uca Çözümler</h2>
          <p>
            İK süreçlerinizi dijitalleştirerek zaman ve maliyet tasarrufu sağlayın. 
            İşte Netkurum’un sunduğu bazı temel yetenekler.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.visual}>
                <div className={styles.imageWrapper}>
                  <img src={feature.image} alt={feature.title} className={styles.snippet} />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <span className={styles.icon}>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                </div>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <button className="btn btn-outline">Tüm Özellikleri Gör</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
