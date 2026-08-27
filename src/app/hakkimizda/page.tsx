import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./About.module.css";

export default function About() {
  return (
    <main>
      <Navbar />
      <section className={styles.about}>
        <div className="container">
          <div className={styles.header}>
            <h1 className="gradient-text">Hakkımızda</h1>
            <p className={styles.intro}>
              Karatsoft Teknoloji tarafından geliştirilen Netkurum, işletmelerin dijital dönüşüm yolculuğunda İK süreçlerini hızlandırmak ve verimliliği artırmak amacıyla kurulmuştur.
            </p>
          </div>

          <div className={styles.content}>
            <div className={styles.vision}>
              <h2>Vizyonumuz</h2>
              <p>Türkiye’nin ve dünyanın en kolay kullanılabilir, en güvenilir bulut tabanlı İK platformu olmak.</p>
            </div>
            
            <div className={styles.mission}>
              <h2>Misyonumuz</h2>
              <p>Her ölçekteki işletmenin, yüksek maliyetlere katlanmadan en ileri PDKS teknolojilerine erişimini sağlamak.</p>
            </div>
          </div>
          
          <div className={styles.values}>
            <div className={styles.valueItem}>
              <h3>Güvenilirlik</h3>
              <p>Verileriniz bizim için kutsaldır. En üst düzey güvenlik standartlarıyla korunur.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>İnovasyon</h3>
              <p>Sürekli gelişen teknolojimizle size her zaman en iyisini sunuyoruz.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Müşteri Odaklılık</h3>
              <p>Sizden gelen geri bildirimler, yol haritamızın en önemli parçasıdır.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
