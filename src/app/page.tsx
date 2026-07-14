import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <img className={styles.heroImg} src="/images/skydiving.webp" alt="優秀な人材" />
        <div className={styles.heroText}>
          <h1>優秀な人材、<br></br>ここにいます。</h1>
        </div>
      </div> 

      <div className={styles.greet}>
        <img className={styles.greetImg} src="/images/greet.png" alt="尾野 響" />
        <div className={styles.greetText}>
          <h1>尾野 響</h1>
          <p>大学卒業後、バンド活動を６年くらいやったよ。
          <br />今はシステムエンジニアを志しているよ。</p>
          <a href="">詳細はこちら</a>
        </div>
      </div>

      <div className={styles.works}>
        <div className={`${styles.worksCard} ${styles.frontCard}`}>
          FrontEnd
        </div>
        <div className={`${styles.worksCard} ${styles.backCard}`}>
          BackEnd
        </div>
        <div className={`${styles.worksCard} ${styles.infraCard}`}>
          Infrastructure
        </div>
      </div>
    </main>
  );
}