import React from "react";
import styles from "./WorkCard.module.css";
import appImage from "../assets/work.png";

const WorkCard: React.FC = () => {
  return (
    <div className={styles.workCard}>

        <h2 className={styles.workHeading}>Works</h2>
        
        <div className={styles.card}>
            <img src={appImage} alt="作品サムネイル" className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>ToDo管理アプリ</h3>
                <p className={styles.description}>
                    ここに作品の説明が入ります。作品の特徴や技術スタックについて簡潔に記述します。
                </p>
                <p className={styles.date}>期間:2025年7月~8月</p>
                <a href="#" className={styles.link}>GitHubを見る</a>
            </div>
        </div>

    </div>
  );
};

export default WorkCard;
