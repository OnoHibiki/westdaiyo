//CSS
import styles from "./Home.module.css"; 

//Components
import { Header } from "../components/Header/Header";

export function Home() {
    return(
        <>
            <Header />
            <main className={styles.main}>
                <section id ="top">{/*Hero予定*/}
                    <h1>テスト</h1>
                </section>
            </main>
        </>
    );
} 