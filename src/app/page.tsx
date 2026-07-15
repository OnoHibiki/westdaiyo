import styles from "./page.module.css";
import Link from "next/link";

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
          <p>大学卒業後、バンド活動を６年くらいやってた。
          <br />今はシステムエンジニアを志しているよ。</p>
          <Link href="">詳細はこちら</Link>
        </div>
      </div>

      <div className={styles.works}>
        <h1>ポートフォリオはこちら</h1>
        <Link className={styles.worksCard} href="">
          <p>Works</p>
        </Link>
      </div>
    </main>
  );
}