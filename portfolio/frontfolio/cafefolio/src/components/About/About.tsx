import styles from "./About.module.css";
import ownerImg from "../../assets/images/owner.JPG";

export function About() {
    return(
        <section  className={styles.about} id="about">
            <div className={styles.inner}>
                
                {/* 左：画像 */}
                <div className={styles.media}>
                    <img 
                        className={styles.image}
                        src={ownerImg} 
                        alt="店主の写真" 
                    />
                {/* 右：テキスト */}
                    <div className={styles.text}>
                        <h2 className={styles.title}>What?</h2>
                        <p className={styles.lead}>
                            喫茶Ono 店主・尾野 響
                        </p>
                        <p className={styles.description}>
                            コーヒーの香りと共に、<br />
                            非日常に少しの余白を。<br />
                            Since1963の時代の香りと共に、<br />
                            あなたを、恐怖へ誘う・・・
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}