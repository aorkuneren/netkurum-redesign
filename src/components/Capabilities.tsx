import Image from "next/image";
import styles from "./Capabilities.module.css";

const features = [
  {
    title: "QR & Konum Doğrulama",
    description: "Personelinizin nerede ve ne zaman giriş yaptığını GPS verisiyle garanti altına alın.",
    icon: "📍"
  },
  {
    title: "Anlık Bildirimler",
    description: "Geç kalan veya izinsiz giriş denemelerinden anında haberdar olun.",
    icon: "🔔"
  },
  {
    title: "Esnek Vardiya Yapısı",
    description: "En karmaşık çalışma modellerini bile dakikalar içinde sisteme tanımlayın.",
    icon: "🔄"
  },
  {
    title: "Gelişmiş Raporlama",
    description: "Verimliliği artırmak için tüm giriş-çıkış verilerini tek tıkla analiz edin.",
    icon: "📈"
  }
];

const Capabilities = () => {
  return (
    <section className={styles.capabilities}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left Side: QR Mockup */}
          <div className={styles.mockupSide}>
            <div className={styles.mockupContainer}>
              <Image 
                src="/iphone-qr-mockup.png" 
                alt="QR Kod Takip"
                width={360}
                height={730}
                className={styles.qrMockup}
                priority
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={styles.contentSide}>
            <h2 className={styles.heading}>
              Netkurum'un Gelişmiş <br />
              İK ve PDKS Yetenekleri
            </h2>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.icon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
