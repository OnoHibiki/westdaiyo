"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // 項目ホバー時に画像を入れ替える
  const [heroImage, setHeroImage] = useState("/images/greet.png");
  // 自己紹介モーダル
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  // コンタクトモーダル
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.heroMenu}>
          <button
            className={`${styles.bubble} ${styles.about}`}
            onMouseEnter={() => {
              setTimeout(() => {
                setHeroImage("/images/About.png");
              }, 50);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setHeroImage("/images/greet.png");
              }, 150);
            }}
            onClick={() => setIsAboutOpen(true)}
          >
            ABOUT
          </button>

          <button
            className={`${styles.bubble} ${styles.works}`}
            onMouseEnter={() => {
              setTimeout(() => {
                setHeroImage("/images/Works.png");
              }, 50);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setHeroImage("/images/greet.png");
              }, 150);
            }}
          >
            WORKS
          </button>

          <button
            className={`${styles.bubble} ${styles.contact}`}
            onMouseEnter={() => {
              setTimeout(() => {
                setHeroImage("/images/CONTACT.png");
              }, 50);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setHeroImage("/images/greet.png");
              }, 150);
            }}
            onClick={() => setIsContactOpen(true)}
          >
            CONTACT
          </button>
        </div>
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

              <h2>ABOUT ME</h2>

              <div className={styles.aboutContent}>
                <img 
                  className={styles.aboutImage}
                  src="/images/greet.png" alt="Hibiki Ono" 
                />
      
                <div className={styles.aboutText}>
                  <h3>尾野 響(Hibiki Ono)</h3>
                  <p>Hibiki Ono</p>
                  <p>ここに自己紹介を書いていきます</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {isContactOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.contactModal}>
              <button
                className={styles.closeButton}
                onClick={() => setIsContactOpen(false)}
              >
                ×
              </button>

              <h2>CONTACT</h2>

              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input 
                    id="name"
                    type="text" 
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" 
                    type="email" 
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message"/>
                </div>

                <button type="submit">
                  SEND
                </button>
              </form>
            </div>
          </div>
        )}
      
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Hibiki Ono</p>

        <a
          href="https://github.com/OnoHibiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </main>
  );
}