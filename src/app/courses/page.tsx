import styles from "./page.module.css";
import CourseCard from "@/components/CourseCard";

const courses = [
    {
        title: "Organic Chemistry Masterclass",
        description: "Complete guide to reactions, mechanisms, and IUPAC naming. Perfect for JEE/NEET aspirants.",
        topic: "Organic",
        link: "/videos?topic=Organic"
    },
    {
        title: "Inorganic Chemistry Series",
        description: "Master the periodic table, bonding, and coordination compounds with easy-to-remember tricks.",
        topic: "Inorganic",
        link: "/videos?topic=Inorganic"
    },
    {
        title: "Physical Chemistry Concepts",
        description: "Deep dive into mole concepts, thermodynamics, and kinetics with numerical problem solving.",
        topic: "Physical",
        link: "/videos?topic=Physical"
    },
    {
        title: "Class 12 Board Exam Prep",
        description: "Focused revision on high-weightage chapters for CBSE and State Board exams.",
        topic: "Boards",
        link: "/videos?exam=Boards"
    },
    {
        title: "JEE Mains & Advanced Drill",
        description: "Advanced problem solving and previous year questions analysis.",
        topic: "JEE",
        link: "/videos?exam=JEE"
    },
    {
        title: "NEET Chemistry Crash Course",
        description: "Rapid revision of entire syllabus with focus on NCERT.",
        topic: "NEET",
        link: "/videos?exam=NEET"
    }
];

export default function Courses() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Chemistry Courses</h1>
                <p className={styles.subtitle}>Structured learning paths for every exam goal.</p>
            </header>

            <section className={`container ${styles.grid}`}>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        description={course.description}
                        topic={course.topic}
                        link={course.link}
                    />
                ))}
            </section>
        </div>
    );
}
