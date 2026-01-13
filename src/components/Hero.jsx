import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-premium">
            {/* Dynamic Background Elements */}
            <div className="bg-blur blue"></div>
            <div className="bg-blur purple"></div>

            <div className="hero-content-wrapper">
                <div className="container-fluid px-lg-5">
                    <div className="row align-items-center min-vh-100">
                        <div className="col-lg-8">
                            <div className="hero-text-block">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="hero-tag">Available for new projects</span>
                                    <h1 className="hero-display">
                                        Senior <span className="text-gradient">Software Developer</span> <br />
                                        & DevOps Engineer
                                    </h1>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="hero-lead"
                                >
                                    I'm Temitope Famakinwa, a Senior Software Developer dedicated to
                                    building scalable, high-performance applications that resonate on a global scale.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="hero-buttons"
                                >
                                    <a href="#projects" className="btn-premium">
                                        View Portfolio <ArrowDownRight size={18} className="ms-2" />
                                    </a>
                                    <a href="#about" className="btn-outline-premium ms-md-4 mt-3 mt-md-0">
                                        The Story
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="hero-visual"
                            >
                                <div className="visual-card">
                                    <img src="/images/temitope.png" alt="Temitope" />
                                    <div className="visual-overlay"></div>
                                </div>
                                <div className="floating-badge">
                                    <span className="badge-orbit"></span>
                                    <div className="badge-content">
                                        <strong>6+</strong>
                                        <span>Years Experience</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
