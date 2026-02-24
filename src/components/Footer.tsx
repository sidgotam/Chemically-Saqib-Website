import Link from "next/link";
import { Youtube, Send, Phone, Instagram } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h3>Chemically Saqib</h3>
                        <p>Master Chemistry for JEE, NEET & Boards.</p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/notes">Notes</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.contact}>
                        <h4>Contact Us</h4>
                        <p><Phone size={16} className={styles.icon} /> +91 85649 89703</p>
                        <div className={styles.socials}>
                            <a href="https://www.youtube.com/@chemicallysaqib9873" target="_blank" rel="noopener noreferrer"><Youtube /></a>
                            <a href="https://t.me/chemicallysaqib" target="_blank" rel="noopener noreferrer"><Send /></a>
                            <a href="https://www.instagram.com/saqib.raza.3591" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>© 2026 Chemically Saqib. All Rights Reserved.</p>
                    <p className={styles.credit}>
                        Designed & Developed by <a href="https://www.siddportfolio.in/" target="_blank" rel="noopener noreferrer">Siddhartha</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
