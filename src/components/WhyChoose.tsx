import styles from "./WhyChoose.module.css";
import { CheckCircle } from "lucide-react";

const points = [
    {
        title: "Clear Chemistry Concepts",
        description: "Deep dive into fundamental concepts to build a strong base for advanced topics."
    },
    {
        title: "Solved Examples & Drills",
        description: "Step-by-step solutions to typical exam problems and practice drills."
    },
    {
        title: "Exam-Focused Lessons",
        description: "Curriculum tailored specifically for JEE, NEET, and Class 11-12 Board exams."
    },
    {
        title: "Free Notes & Practice",
        description: "Access high-quality PDF notes and practice sheets via our Telegram channel."
    }
];

const WhyChoose = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.heading}>Why Choose Chemically Saqib?</h2>
                <div className={styles.grid}>
                    {points.map((point, index) => (
                        <div key={index} className={styles.card}>
                            <CheckCircle className={styles.icon} size={32} />
                            <h3 className={styles.title}>{point.title}</h3>
                            <p className={styles.description}>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
