import Image from "next/image";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            Netkurum Mobil Uygulamasını İndirin <br />
            ve Bugün Dijitalleşmeye Başlayın
          </h2>
          <p className={styles.subtitle}>
            Netkurum'u şimdi indirin ve personel yönetim süreçlerinizi <br className={styles.desktopBr} />
            cebinizden yönetmenin kolaylığını deneyimleyin!
          </p>

          <div className={styles.appButtons}>
            <a href="#" className={styles.appButton} aria-label="Google Play'den İndir">
              <Image src="/google-play.svg" alt="" width={24} height={24} />
              <div className={styles.btnText}>
                <span>Get It On</span>
                <strong>Google Play</strong>
              </div>
            </a>
            <a href="#" className={styles.appButton} aria-label="App Store'dan İndir">
              <Image src="/app-store.svg" alt="" width={24} height={24} />
              <div className={styles.btnText}>
                <span>Download on the</span>
                <strong>App Store</strong>
              </div>
            </a>
          </div>

          <div className={styles.trustIndicators}>
            <div className={styles.indicator}>
              <span className={styles.indicatorIcon}>⭐</span>
              <div>
                <strong>4.8/5</strong>
                <p>Kullanıcı Puanı</p>
              </div>
            </div>
            <div className={styles.indicator}>
              <span className={styles.indicatorIcon}>📱</span>
              <div>
                <strong>50K+</strong>
                <p>Aktif Kullanıcı</p>
              </div>
            </div>
            <div className={styles.indicator}>
              <span className={styles.indicatorIcon}>🏢</span>
              <div>
                <strong>500+</strong>
                <p>Kurumsal Müşteri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
