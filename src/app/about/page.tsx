import styles from "./page.module.css";
import { Youtube, Send, Instagram } from "lucide-react";

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1 className={styles.title}>About Chemically Saqib</h1>
            </section>

            <section className={`container ${styles.content}`}>
                <div className={styles.card}>
                    <h2>Our Mission</h2>
                    <p>
                        Helping students crack competitive exams with powerful chemistry understanding. We believe in concept-based learning that goes beyond rote memorization.
                    </p>
                </div>

                <div className={styles.card}>
                    <h2>What We Do</h2>
                    <p>
                        Chemically Saqib is an educational platform providing deep chemistry learning through YouTube video lessons and Telegram-shared notes & resources. We cover everything from basic concepts to advanced problem-solving for JEE, NEET, and Class 11-12 Boards.
                    </p>
                </div>

                <div className={styles.socials}>
                    <h3>Connect With Us</h3>
                    <div className={styles.links}>
                        <a href="https://www.youtube.com/@chemicallysaqib9873" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <Youtube style={{ marginRight: '8px' }} /> YouTube Channel
                        </a>
                        <a href="https://t.me/chemicallysaqib" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Send style={{ marginRight: '8px' }} /> Telegram Channel
                        </a>
                        <a href="https://www.instagram.com/saqib.raza.3591" target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ display: 'flex', alignItems: 'center' }}>
                            <Instagram style={{ marginRight: '8px' }} /> Instagram
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
