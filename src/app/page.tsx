import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>

        <button className={`${styles.bubble} ${styles.about}`}>
          About
        </button>

        <button className={`${styles.bubble} ${styles.works}`}>
          Works
        </button>

        <button className={`${styles.bubble} ${styles.contact}`}>
          CONTACT
        </button>

        <img 
          className={styles.heroImage}
          src="/images/greet.png"
          alt="Hibiki Ono" 
        />

      </section>

      <footer className={styles.footer}>
        <p>© 2026 Hibiki Ono</p>
      </footer>
    </main>
  );
}