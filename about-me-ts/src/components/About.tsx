import React from "react";
import styles from "./About.module.css";

const About:React.FC = () => {
    return(
        <div className={styles.container}>
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