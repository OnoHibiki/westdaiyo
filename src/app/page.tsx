"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // 項目ホバー時に画像を入れ替える
  const [heroImage, setHeroImage] = useState("/images/greet.png");

  return (
    <main className={styles.main}>

      <section className={styles.hero}>

        <button 
          className={`${styles.bubble} ${styles.about}`}
          onMouseEnter={() => setHeroImage("/images/about.JPG")}
          onMouseLeave={() => setHeroImage("/images/greet.png")}
        >
          About
        </button>

        <button 
          className={`${styles.bubble} ${styles.works}`}
          onMouseEnter={() => setHeroImage("/images/works.jpg")}
          onMouseLeave={() => setHeroImage("/images/greet.png")}
        >
          Works
        </button>

        <button
          className={`${styles.bubble} ${styles.contact}`}
          onMouseEnter={() => setHeroImage("/images/contact.JPG")}
          onMouseLeave={() => setHeroImage("/images/greet.png")}
        >
          CONTACT
        </button>

        <img 
          className={styles.heroImage}
          src={heroImage}
          alt="Hibiki Ono" 
        />

      </section>

      <footer className={styles.footer}>
        <p>© 2026 Hibiki Ono</p>
      </footer>
    </main>
  );
}