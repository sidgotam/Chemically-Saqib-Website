"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Chemically Saqib
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/courses" className={styles.navLink}>Courses</Link>
                    <Link href="/videos" className={styles.navLink}>Video Library</Link>
                    <Link href="/notes" className={styles.navLink}>Notes & Resources</Link>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </div>

                {/* CTA Button */}
                <div className={styles.ctaContainer}>
                    <a href="tel:+918564989703" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Phone size={18} /> Call Now
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className={styles.mobileIcon} onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link>
                    <Link href="/about" className={styles.mobileNavLink} onClick={toggleMenu}>About</Link>
                    <Link href="/courses" className={styles.mobileNavLink} onClick={toggleMenu}>Courses</Link>
                    <Link href="/videos" className={styles.mobileNavLink} onClick={toggleMenu}>Video Library</Link>
                    <Link href="/notes" className={styles.mobileNavLink} onClick={toggleMenu}>Notes & Resources</Link>
                    <Link href="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
