import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
    return(
        <header className={styles.top}>
            <h1 className={styles.title}>Hibiki's ポートフォリオサイト</h1>
        </header>
    );
};

export default Header;