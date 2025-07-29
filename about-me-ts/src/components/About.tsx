import React,  {useMemo} from "react";
import styles from "./About.module.css";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.png";

import WorkCard from "./WorkCard";
import appImage from "../assets/work.png";

const About:React.FC = () => {
    //複数の画像を配列で管理。ランダム表示
    const images =[profile1,profile2,profile3];

    const selectedImage = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    },[]);

    return (
        <div>
            <div className={styles.profileSection}>

                <div className={styles.container}>
                    <img src={selectedImage} alt="プロフィール画像" className={styles.image} />

                    <div className={styles.textArea}>
                        <h2 className={styles.heading}>こんにちは！尾野響と申します！</h2>
                        <p className={styles.paragraph}>
                            バックエンド・フロントエンドどちらも挑戦中で、<br />
                            特にNext.jsやGraphQLなど、<br />
                            モダンな技術の習得を目指しております。
                        </p>
                        <p className={styles.paragraph}>
                            このポートフォリオサイトでは、<br />
                            私が作ったアプリや学習記録を発信していきます。<br />
                            どうぞよろしくお願いいたします。
                        </p>
                    </div>

                </div>
                
            </div>

            <div className={styles.workSection}>
                <h2 className={styles.workHeading}>Works</h2>
                <div className={styles.cardContainer}>
                    <WorkCard
                        title="ToDo管理アプリ"
                        appImage={appImage}
                        description="ここに作品の説明が入ります。作品の特徴や技術スタックについて簡潔に記述します。"
                        appLink="#"
                        gitLink="#"
                    />
                    <WorkCard
                        title="Coming soon..."
                        appImage={appImage}
                        description="Coming soon..."
                        appLink="#"
                        gitLink="#"
                        disabled={true} // リンクを無効化
                    />
                    <WorkCard
                        title="Coming soon..."
                        appImage={appImage}
                        description="Coming soon..."
                        appLink=""
                        gitLink=""
                        disabled={true} // リンクを無効化
                    />
                </div>
            </div>
            
        </div>
        
    );
};

export default About;