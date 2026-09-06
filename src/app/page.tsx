import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
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