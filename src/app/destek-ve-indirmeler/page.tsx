import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Support.module.css";

export default function Support() {
  return (
    <main>
      <Navbar />
      <section className={styles.support}>
        <div className="container">
          <h1 className="gradient-text">Destek ve İndirmeler</h1>
          <p className={styles.subtitle}>İhtiyacınız olan dokümanlar ve uygulamalar aşağıdadır.</p>
          
          <div className={styles.grid}>
            <div className={`${styles.card} glass`}>
              <h3>📱 Mobil Uygulama</h3>
              <p>Personel giriş-çıkışları için Netkurum uygulaması.</p>
              <div className={styles.actions}>
                <button className="btn btn-secondary">App Store</button>
                <button className="btn btn-secondary">Play Store</button>
              </div>
            </div>

            <div className={`${styles.card} glass`}>
              <h3>📄 Kullanım Kılavuzu</h3>
              <p>Sistemi nasıl kullanacağınıza dair detaylı PDF rehberi.</p>
              <button className="btn btn-primary">İndir (PDF)</button>
            </div>

            <div className={`${styles.card} glass`}>
              <h3>💻 Masaüstü Bağlantı</h3>
              <p>Donanım entegrasyonu için gerekli yardımcı yazılım.</p>
              <button className="btn btn-primary">Windows için İndir</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
