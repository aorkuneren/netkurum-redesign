import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.iconBox}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="12" fill="var(--brand-soft)" />
            <path d="M20 12V28M12 20H28" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        
        <h2 className={styles.heading}>
          Binlerce çalışan, yüzlerce işletme Netkurum ile geleceğe hazırlanıyor.
        </h2>

        <div className={styles.grid}>
          <div className={styles.item}>
            <h3>500+</h3>
            <p>Aktif çalışan kurumsal şirket ve işletme.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.item}>
            <h3>50K+</h3>
            <p>Sistemde kayıtlı aktif personel ve kullanıcı.</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.item}>
            <h3>%100</h3>
            <p>Bulut tabanlı, yerli ve milli yazılım altyapısı.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
