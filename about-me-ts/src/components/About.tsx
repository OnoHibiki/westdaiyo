import React,  {useMemo} from "react";
import styles from "./About.module.css";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.png";

const About:React.FC = () => {
    //複数の画像を配列で管理。ランダム表示
    const images =[profile1,profile2,profile3];

    const selectedImage = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    },[]);

    return(
        <div className={styles.container}>
            <img src={selectedImage} alt="プロフィール画像" className={styles.image} />
            <h2 className={styles.heading}>こんにちは！尾野響と申します！</h2>
            <p className={styles.paragraph}>
                バックエンド・フロントエンドどちらも挑戦中で、特にNext.jsやGraphQLなど、モダンな技術の習得を目指しております。
            </p>
            <p className={styles.paragraph}>
                このポートフォリオサイトでは、私が作ったアプリや学習記録を発信していきます。どうぞよろしくお願いいたします。
            </p>
        </div>
    );
};

export default About;