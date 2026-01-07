"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  {
    question: "Netkurum bulut tabanlı mı çalışıyor?",
    answer: "Evet, Netkurum tamamen bulut tabanlı bir sistemdir. Sunucu maliyeti veya sabit IP gereksinimi duymaz, internet olan her yerden erişilebilir."
  },
  {
    question: "Mobil uygulama üzerinden giriş-çıkış yapılabiliyor mu?",
    answer: "Evet, GPS veya QR kod doğrulamasıyla personelin fiziksel cihaza ihtiyaç duymadan giriş-çıkış yapmasını sağlar."
  },
  {
    question: "Sistem KVKK uyumlu mu?",
    answer: "Kesinlikle. Biyometrik verilerin cihazlarda tutulmaması ve verilerin güvenli sunucularda saklanmasıyla KVKK süreçlerine tam uyum sağlıyoruz."
  },
  {
    question: "Kurulum süreci ne kadar sürer?",
    answer: "Yeni nesil bağlantı kutumuz sayesinde tak-çalıştır mantığıyla dakikalar içinde kurulum tamamlanabilir."
  },
  {
    question: "Hangi cihazlarla entegre çalışıyor?",
    answer: "Yüz tanıma, parmak izi, avuç içi damar izi, RFID ve manyetik kart okuyucuları gibi tüm yaygın donanımlarla tam entegredir."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <div className="badge">
            <span>❓</span> FAQ's
          </div>
          <h2>Sıkça Sorulan Sorular</h2>
          <p>Netkurum hakkında merak edilenlerin yanıtları.</p>
        </div>

        <div className={styles.list}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ""}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className={styles.questionContainer}>
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.iconBox}>
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
              <div className={styles.answerWrapper}>
                <div className={styles.divider}></div>
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
