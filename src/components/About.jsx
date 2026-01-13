import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Phone } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-premium">
            <div className="section-container">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="about-grid">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="grid-item large"
                                data-aos="fade-up"
                            >
                                <img src="/images/image1.png" alt="Profile" />
                            </motion.div>
                            <div className="grid-item small" data-aos="fade-up" data-aos-delay="200">
                                <div className="glass-card">
                                    <Briefcase className="mb-2 text-accent" />
                                    <h4>Expertise</h4>
                                    <p>Full-Stack / Cloud</p>
                                </div>
                            </div>
                            <div className="grid-item small" data-aos="fade-up" data-aos-delay="400">
                                <div className="glass-card">
                                    <MapPin className="mb-2 text-accent" />
                                    <h4>Base</h4>
                                    <p>Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="about-details" data-aos="fade-left">
                            <span className="section-tag">Identity</span>
                            <h2 className="section-title">Bridging Innovation <br /> & Reliability</h2>
                            <p className="description">
                                Dynamic Full Stack Software Developer with over 5 years of experience building scalable,
                                user-centric web applications. Proficient in JavaScript frameworks (Vue.js, React.js),
                                PHP Laravel, and cloud technologies. Skilled in DevOps tools to optimize workflows and
                                ensure system reliability.
                            </p>

                            <div className="contact-pills mt-5">
                                <div className="pill">
                                    <Mail size={16} /> famakinwatemitope@gmail.com
                                </div>
                                <div className="pill">
                                    <Phone size={16} /> +234 703 909 2027
                                </div>
                            </div>

                            <div className="metrics-row mt-5">
                                <div className="metric">
                                    <span className="value">60+</span>
                                    <span className="label">Delivered Projects</span>
                                </div>
                                <div className="metric">
                                    <span className="value">99%</span>
                                    <span className="label">Success Rate</span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button className="btn-premium">Curriculum Vitae</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
