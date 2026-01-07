import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className="container">
        <div className="section-header">
          <h2>Esnek Fiyatlandırma</h2>
          <p>İşletmenizin büyüklüğüne göre ölçeklenebilir planlar.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.plan}>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Başlangıç</span>
              <div className={styles.price}>
                <span className={styles.currency}>₺</span>
                <span className={styles.amount}>0</span>
                <span className={styles.period}>/ay</span>
              </div>
              <p>Küçük ekipler için ideal başlangıç paketi.</p>
            </div>
            <ul className={styles.features}>
              <li>10 Çalışana Kadar</li>
              <li>Mobil Giriş-Çıkış</li>
              <li>Temel Raporlama</li>
              <li>E-posta Desteği</li>
            </ul>
            <button className="btn btn-secondary" style={{width: '100%'}}>Ücretsiz Başla</button>
          </div>

          <div className={`${styles.plan} ${styles.featured}`}>
            <div className={styles.badge}>Popüler</div>
            <div className={styles.planHeader}>
              <span className={styles.planName}>Profesyonel</span>
              <div className={styles.price}>
                <span className={styles.currency}>₺</span>
                <span className={styles.amount}>99</span>
                <span className={styles.period}>/ay</span>
              </div>
              <p>Büyüyen işletmeler için gelişmiş özellikler.</p>
            </div>
            <ul className={styles.features}>
              <li>Sınırsız Çalışan</li>
              <li>Vardiya Yönetimi</li>
              <li>Gelişmiş Puantaj</li>
              <li>İzin Yönetimi</li>
              <li>7/24 Teknik Destek</li>
              <li>KVKK Uyum Arşivi</li>
            </ul>
            <button className="btn btn-brand" style={{width: '100%'}}>Hemen Başla</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
