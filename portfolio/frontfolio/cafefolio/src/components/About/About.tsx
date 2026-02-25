import styles from "./About.module.css";
import ownerImg from "../../assets/images/owner.JPG";

export function About() {
    return(
        <section  className={styles.about} id="about">
            <div className={styles.inner}>
                
                <h1 className={styles.title}>
                    私が運営しています。
                </h1>
                {/* 左：画像 */}
                <div className={styles.media}>
                    <img 
                        className={styles.image}
                        src={ownerImg} 
                        alt="店主の写真" 
                    />
                {/* 右：テキスト */}
                    <div className={styles.text}>
                        <h2 className={styles.my}>喫茶Ono 店主・尾野 響</h2>
                        <p className={styles.description}>
                            コーヒーの香りと共に、非日常に少しの余白を。<br />
                            Since1963の時代の香りと共に、あなたを、恐怖へ誘う・・・<br />
                            コーヒ初心者の意地、見せたるで。
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}