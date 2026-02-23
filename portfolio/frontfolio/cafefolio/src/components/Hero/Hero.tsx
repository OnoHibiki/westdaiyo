import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero1.JPG";

export function Hero () {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.inner}>
                <img src={heroImage} alt="コーヒー" className={styles.heroImage}  />
                <div className={styles.overlay}></div> {/*背景画像透過用*/}
                <div className={styles.content}>
                    <h1 className={styles.left}>安らぎのカフェ</h1>
                    <h1 className={styles.right}>喧騒とは無縁</h1>
                </div>
            </div>
        </section>
    );
}