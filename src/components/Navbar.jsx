import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={`nav-premium ${scrolled ? 'nav-scrolled' : ''}`}>
                <div className="nav-container">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="logo"
                    >
                        T<span>.</span>F
                    </motion.div>

                    <div className="nav-links-desktop">
                        {navLinks.map((link, idx) => (
                            <a key={idx} href={link.href} className="nav-link-item">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <a href="#contact" className="btn-premium btn-sm">Let's Talk</a>
                        <button className="mobile-toggle" onClick={() => setIsOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-overlay"
                    >
                        <button className="close-overlay" onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                        <div className="mobile-links">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
