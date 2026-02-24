import styles from "./CourseCard.module.css";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
    title: string;
    description: string;
    topic: string;
    link: string;
}

const CourseCard = ({ title, description, topic, link }: CourseCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconWrapper}>
                <BookOpen size={32} />
            </div>
            <span className={styles.topic}>{topic}</span>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={link} className={styles.cta}>
                View Details &rarr;
            </Link>
        </div>
    );
};

export default CourseCard;
