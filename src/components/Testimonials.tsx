import styles from "./Testimonials.module.css";

const feedbacks = [
  {
    text: "Netkurum sayesinde 200 kişilik ekibimizin vardiya ve izin süreçlerini tamamen dijitalleştirdik. Kağıt üzerinde takip ettiğimiz günler geride kaldı.",
    name: "Murat Yılmaz",
    role: "HR Müdürü, Teknoloji A.Ş.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    text: "Mobil uygulamasının kolaylığı ve hızı harika. Saha ekibimizin giriş çıkışlarını GPS ile anlık takip edebilmek bizi çok rahatlattı.",
    name: "Selin Demir",
    role: "Operasyon Direktörü, Lojistik Grup",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    text: "Yerli bir yazılım olmasına rağmen global standartlarda bir UI/UX deneyimi sunuyorlar. Teknik destek ekibi de her zaman çözüm odaklı.",
    name: "Emre Aksoy",
    role: "Kurucu Ortak, Retail Solutions",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    text: "Bulut tabanlı olması sayesinde sunucu maliyetinden kurtulduk. Her yerden erişilebilir olması hibrit çalışma düzenimiz için can kurtarıcı oldu.",
    name: "Zeynep Kaya",
    role: "IT Yöneticisi, Pro-Line",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

const Testimonials = () => {
  const marqueeItems = [...feedbacks, ...feedbacks, ...feedbacks];

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <span>💬</span> Testimonials
          </div>
          <h2>Müşterilerimizin Deneyimleri</h2>
          <p>
            Netkurum'un işletmelere nasıl değer kattığını ve dijital dönüşüm <br />
            süreçlerini nasıl kolaylaştırdığını kullanıcılarımızdan dinleyin.
          </p>
        </div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((feedback, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.textQuote}>
                <p>{feedback.text}</p>
              </div>
              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <img src={feedback.avatar} alt={feedback.name} className={styles.avatar} />
                </div>
                <div className={styles.info}>
                  <h3>{feedback.name}</h3>
                  <span>{feedback.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
