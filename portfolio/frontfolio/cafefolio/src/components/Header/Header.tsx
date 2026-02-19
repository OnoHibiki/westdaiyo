import styles from "./Header.module.css";

export function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.inner}>
                <a href="#top" className={styles.shopName}>喫茶Ono</a>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li><a href="#about">お店について</a></li>
                        <li><a href="#reservation">Web予約</a></li>
                        <li><a href="#access">Map</a></li>
                        <li><a href="#contact">問い合わせ</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}