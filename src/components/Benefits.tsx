import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.intro}>
          <div className={styles.iconBox}>📊</div>
          <p className={styles.lead}>
            Netkurum, karmaşık İK süreçlerini basitleştirmek ve işletmelerin operasyonel verimliliğini 
            artırmak için tasarlandı. Verileriniz güvende, süreçleriniz kontrolünüzde.
          </p>
        </div>

        <div className="section-header">
          <h2>Netkurum’un Avantajları</h2>
          <p>İşletmenizin ihtiyaçlarına göre tasarlanmış kapsamlı modüller.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📱</div>
            <h3>Mobil Giriş-Çıkış</h3>
            <p>GPS ve QR kod ile saha personeli dahil tüm çalışanlarınız kolayca mesai kaydı oluşturabilir.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📅</div>
            <h3>Akıllı Vardiya</h3>
            <p>Karmaşık vardiya düzenlerini otomatik planlayın, eksik personeli anında görün.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🏖️</div>
            <h3>İzin Yönetimi</h3>
            <p>Çalışanlar mobil uygulama üzerinden izin talep etsin, yöneticiler tek tıkla onaylasın.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📊</div>
            <h3>Anlık Raporlama</h3>
            <p>Puantaj cetvelleri, performans analizleri ve devamsızlık raporlarını Excel’e aktarın.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
