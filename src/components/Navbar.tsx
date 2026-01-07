"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`${styles.inner} container`}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="Netkurum" 
              width={160} 
              height={36} 
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <Link href="/ozellikler">Özellikler</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/destek">Destek</Link>
            <Link href="/iletisim">İletişim</Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/demo" className="btn btn-primary">Hemen Başlayın</Link>
          </div>

          <button 
            className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className={styles.overlay} 
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link href="/ozellikler" onClick={() => setMenuOpen(false)}>Özellikler</Link>
          <Link href="/hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/destek" onClick={() => setMenuOpen(false)}>Destek</Link>
          <Link href="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link>
          <Link href="/demo" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            Hemen Başlayın
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
