//CSS
import styles from "./Home.module.css"; 

//Components
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";

export function Home() {
    return(
        <>
            <Header />
            <main className={styles.main}>
                <Hero />
                <About />
            </main>
        </>
    );
} 