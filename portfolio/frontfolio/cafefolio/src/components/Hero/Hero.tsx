import styles from "./Hero.module.css";

export function Hero () {
    return (
        <section className={styles.hero} id="top">
            <div className={styles.overlay}></div> {/*背景画像透過用*/}

            <div className={styles.content}>
                <h1>ゴリラも驚き</h1>
                <p>先祖返りをしてしまいそうなほどの安らぎ空間</p>
                <a href="#reservation" className={styles.button}>
                    Web予約
                </a>
            </div>
        </section>
    );
}