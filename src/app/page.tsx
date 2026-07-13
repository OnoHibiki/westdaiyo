import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <img className={styles.heroImg} src="/images/skydiving.webp" alt="優秀な人材" />
        <div className={styles.heroText}>
          <h1>優秀な人材、<br></br>ここにいます</h1>
        </div>
      </div> 
    </main>
  );
}
