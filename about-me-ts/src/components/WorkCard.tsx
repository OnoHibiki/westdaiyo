import React from "react";
import styles from "./WorkCard.module.css";

type WorkCardProps = {
  title: string;   
  appImage: string;
  description: string;
  appLink: string;
  gitLink: string;
  disabled?: boolean;
};

const WorkCard: React.FC<WorkCardProps> = ({ title, appImage, description, appLink, gitLink , disabled }) => {
  return (
        <div className={styles.card}>
            <img src={appImage} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <a href={disabled ? undefined : appLink} 
                 className={styles.appLink}
                 onClick={disabled ? (e) => e.preventDefault() : undefined}
                 >
                    アプリはこちら！
                </a>
                <p className={styles.description}>
                    {description}
                </p>
                <br />
                <a href={disabled ? undefined : gitLink} 
                 className={styles.gitLink}
                 onClick={disabled ? (e) => e.preventDefault() : undefined}
                 >
                    GitHubを見る
                </a>
            </div>
        </div>
  );
};

export default WorkCard;
