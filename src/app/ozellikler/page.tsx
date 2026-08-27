import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import styles from "./FeaturesPage.module.css";

type FeatureDetailProps = {
  title: string;
  description: string;
  benefits: string[];
  reverse?: boolean;
};

const FeatureDetail = ({ title, description, benefits, reverse = false }: FeatureDetailProps) => (
  <div className={`${styles.detail} ${reverse ? styles.reverse : ""}`}>
    <div className={styles.detailContent}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {benefits.map((b, i) => <li key={i}>✅ {b}</li>)}
      </ul>
    </div>
    <div className={styles.detailVisual}>
      <div className={`${styles.visualBox} glass`}></div>
    </div>
  </div>
);

export default function FeaturesPage() {
  const details = [
    {
      title: "PDKS: Personel Devam Kontrol Sistemi",
      description: "Çalışanların işe giriş-çıkış saatlerini en güncel teknolojilerle takip edin. Fiziksel cihazlara mahkum kalmayın.",
      benefits: [
        "GPS Destekli Mobil Giriş-Çıkış",
        "QR Kod ile Hızlı Doğrulama",
        "Yüz Tanıma ve Parmak İzi Entegrasyonu",
        "Anlık Puantaj Hesaplama"
      ]
    },
    {
      title: "Akıllı Vardiya Yönetimi",
      description: "Esnek vardiya özelliği ile karmaşık rotasyonları saniyeler içinde planlayın. Personel eksikliğini anlık görün.",
      benefits: [
        "Oto-Vardiya Atama",
        "Haftalık ve Aylık Planlama",
        "Vardiya Değişim Talepleri",
        "Gece Mesaisi Takibi"
      ],
      reverse: true
    },
    {
      title: "Dijital İzin Yönetimi",
      description: "Kağıt formlardan kurtulun. İzin süreçlerini uçtan uca dijitalleştirerek zaman kazanın.",
      benefits: [
        "Mobil İzin Talebi",
        "Hiyerarşik Onay Mekanizması",
        "Bakiye İzin Takibi",
        "Resmi Tatil Entegrasyonu"
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="gradient-text">Güçlü Modüller, Kolay Yönetim</h1>
            <p>Netkurum, bir şirketin ihtiyaç duyacağı tüm İK ve PDKS süreçlerini tek bir platformda toplar.</p>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className="container">
          {details.map((d, i) => <FeatureDetail key={i} {...d} />)}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
