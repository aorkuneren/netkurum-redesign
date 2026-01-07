import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import styles from "./SSS.module.css";

export default function SSSPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
