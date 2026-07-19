import styles from "./page.module.css";
import Link from "next/link";

export default function WorkPage() {
    return (
        <main className={styles.main}>
            <div className={styles.worksGreet}>
                <img src="/images/parasailing.JPG" alt="俺やで" />
                <p className={styles.worksGreetText}>
                    いろいろな作品を書いていきます<br />
                    よろしゅうお願いします
                </p>
            </div>
            <Link className={styles.top} href="../">
                TOPへ戻る
            </Link>
            <div className={styles.workCards}>
                <div className={styles.frontCard}>
                    <h2>FrontEnd</h2>
                    <p>ここに作品書いていく</p>
                </div>
                <div className={styles.backCard}>
                    <h2>BackEnd</h2>
                    <p>ここに作品書いていく</p>
                </div>
                <div className={styles.infraCard}>
                    <h2>Infrastructure</h2>
                    <p>ここに作品書いていく</p>
                </div>
            </div>
        </main>
    )
}