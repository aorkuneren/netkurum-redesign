import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./SimplePage.module.css";

const SimplePage = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      <section className={styles.section}>
        <div className="container">
          <h1 className={`${styles.title} gradient-text`}>{title}</h1>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default SimplePage;
