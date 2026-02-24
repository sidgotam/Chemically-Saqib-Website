"use client";
import styles from "./page.module.css";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully! (Demo)");
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Contact Us</h1>
                <p className={styles.subtitle}>Have questions? Reach out to us directly.</p>
            </header>

            <div className={`container ${styles.content}`}>
                {/* Contact Info */}
                <div className={styles.info}>
                    <div className={styles.infoCard}>
                        <Phone className={styles.icon} />
                        <h3>Phone</h3>
                        <p>+91 85649 89703</p>
                        <a href="tel:+918564989703" className={styles.link}>Call Now</a>
                    </div>

                    <div className={styles.infoCard}>
                        <Mail className={styles.icon} />
                        <h3>Email</h3>
                        <p>contact@chemicallysaqib.com</p>
                        <a href="mailto:contact@chemicallysaqib.com" className={styles.link}>Send Email</a>
                    </div>

                    <div className={styles.infoCard}>
                        <Instagram className={styles.icon} />
                        <h3>Instagram</h3>
                        <p>@saqib.raza.3591</p>
                        <a href="https://www.instagram.com/saqib.raza.3591" target="_blank" rel="noopener noreferrer" className={styles.link}>Follow Us</a>
                    </div>

                    <div className={styles.infoCard}>
                        <MapPin className={styles.icon} />
                        <h3>Location</h3>
                        <p>Online / YouTube</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={styles.formWrapper}>
                    <h2>Send a Message</h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
