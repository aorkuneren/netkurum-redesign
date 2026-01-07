import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.header}>
            <h1 className="gradient-text">İletişime Geçin</h1>
            <p>Sorularınız, iş birliği talepleriniz veya teknik destek için bize ulaşın.</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📍</div>
                <div>
                  <h3>Adres</h3>
                  <p>Karatsoft Teknoloji LTD. ŞTİ.<br />Teknopark İstanbul, Pendik/İstanbul</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>📞</div>
                <div>
                  <h3>Telefon</h3>
                  <p>+90 (212) XXX XX XX</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>✉️</div>
                <div>
                  <h3>E-posta</h3>
                  <p>info@netkurum.com</p>
                </div>
              </div>
            </div>

            <form className={`${styles.form} glass`}>
              <div className={styles.formGroup}>
                <label>Adınız Soyadınız</label>
                <input type="text" placeholder="Ad Soyad" required />
              </div>
              <div className={styles.formGroup}>
                <label>Şirket Adı</label>
                <input type="text" placeholder="Şirketiniz" required />
              </div>
              <div className={styles.formGroup}>
                <label>E-posta Adresiniz</label>
                <input type="email" placeholder="email@sirket.com" required />
              </div>
              <div className={styles.formGroup}>
                <label>Mesajınız</label>
                <textarea rows={5} placeholder="Nasıl yardımcı olabiliriz?"></textarea>
              </div>
              <button className="btn btn-primary" style={{width: '100%'}}>Mesajı Gönder</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
