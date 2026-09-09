"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // 項目ホバー時に画像を入れ替える
  const [heroImage, setHeroImage] = useState("/images/greet.png");
  // モーダル
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <main className={styles.main}>

      <section className={styles.hero}>

        <button 
          className={`${styles.bubble} ${styles.about}`}
          onMouseEnter={() => setHeroImage("/images/about.JPG")}
          onMouseLeave={() => setHeroImage("/images/greet.png")}
          onClick={() => setIsAboutOpen(true)}
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

        {isAboutOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.aboutModal}>
              <button
                className={styles.closeButton}
                onClick={() => setIsAboutOpen(false)}
              >
                ×
              </button>

              <h2>自己紹介</h2>
              <p>尾野 響(Hibiki Ono)</p>
              <p>ここに自己紹介を書いていきます</p>
            </div>
          </div>
        )}

      </section>

      <footer className={styles.footer}>
        <p>© 2026 Hibiki Ono</p>
      </footer>
    </main>
  );
}