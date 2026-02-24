import styles from "./page.module.css";
import { FileText, Download, Send } from "lucide-react";

const resources = [
    { title: "Organic Chemistry Notes", type: "PDF", size: "2.4 MB" },
    { title: "Physical Chemistry Formula Sheet", type: "PDF", size: "1.1 MB" },
    { title: "Inorganic Reaction Map", type: "Image", size: "3.5 MB" },
    { title: "JEE Previous Year Questions", type: "PDF", size: "5.2 MB" },
    { title: "NEET Practice Drills", type: "PDF", size: "4.8 MB" },
    { title: "Class 12 Board Solutions", type: "PDF", size: "6.0 MB" },
];

export default function Notes() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Notes & Resources</h1>
                <p className={styles.subtitle}>
                    Download high-quality study materials directly or join our Telegram for daily updates.
                </p>
                <a href="https://t.me/chemicallysaqib" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Send size={20} /> Join Telegram Channel
                </a>
            </header>

            <section className={`container ${styles.content}`}>
                <div className={styles.resourceGrid}>
                    {resources.map((res, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <FileText size={32} />
                            </div>
                            <div className={styles.details}>
                                <h3>{res.title}</h3>
                                <span>{res.type} • {res.size}</span>
                            </div>
                            <button className={styles.downloadBtn}>
                                <Download size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className={styles.note}>
                    <p>* Currently, all files are hosted on our Telegram channel. The download buttons above are demonstrations.</p>
                </div>
            </section>
        </div>
    );
}
