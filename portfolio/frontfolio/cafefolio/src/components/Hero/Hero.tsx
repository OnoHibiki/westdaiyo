import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero1.JPG";

export function Hero () {
    return (
        <section className={styles.hero} id="top">
            <img src={heroImage} alt="コーヒー" className={styles.heroImage}  />
            <div className={styles.overlay}></div> {/*背景画像透過用*/}
            <div className={styles.content}>
                <h1>安らぎのカフェ</h1>
                <p>喧騒とは無縁の時間</p>
            </div>
        </section>
    );
}