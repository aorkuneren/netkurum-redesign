import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Blog.module.css";

type BlogCardProps = {
  title: string;
  excerpt: string;
  date: string;
};

const BlogCard = ({ title, excerpt, date }: BlogCardProps) => (
  <div className={`${styles.card} glass`}>
    <div className={styles.imagePlaceholder}></div>
    <div className={styles.cardContent}>
      <span className={styles.date}>{date}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <button className={styles.readMore}>Devamını Oku →</button>
    </div>
  </div>
);

export default function Blog() {
  const posts = [
    {
      title: "2026'da İK'nın Geleceği: Yapay Zeka ve PDKS",
      excerpt: "İş yerlerinde verimliliği artırmak için teknolojinin nasıl kullanılacağını keşfedin...",
      date: "12 Ocak 2026"
    },
    {
      title: "Vardiya Planlamasında En Sık Yapılan 5 Hata",
      excerpt: "Karmaşık vardiya düzenlerini yönetirken dikkat etmeniz gereken püf noktaları...",
      date: "05 Ocak 2026"
    },
    {
      title: "KVKK ve Biyometrik Verilerin Güvenliği",
      excerpt: "Personel verilerini saklarken yasal süreçlere nasıl uyum sağlarsınız?",
      date: "28 Aralık 2025"
    }
  ];

  return (
    <main>
      <Navbar />
      <section className={styles.blog}>
        <div className="container">
          <h1 className="gradient-text">Netkurum Blog</h1>
          <div className={styles.grid}>
            {posts.map((p, i) => <BlogCard key={i} {...p} />)}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
