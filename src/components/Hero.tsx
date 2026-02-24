import Link from "next/link";
import { Youtube, Send, Phone } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>Master Chemistry with <span className={styles.highlight}>Chemically Saqib</span></h1>
                    <p className={styles.subheadline}>Concept-Based Learning for JEE & NEET | Class 11-12</p>

                    <div className={styles.ctaGroup}>
                        <a href="https://www.youtube.com/@chemicallysaqib9873" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <Youtube size={20} style={{ marginRight: '8px' }} /> Watch on YouTube
                        </a>
                        <a href="https://t.me/chemicallysaqib" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <Send size={20} style={{ marginRight: '8px' }} /> Get Notes on Telegram
                        </a>
                        <a href="tel:+918564989703" className="btn btn-accent">
                            <Phone size={20} style={{ marginRight: '8px' }} /> Contact Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
