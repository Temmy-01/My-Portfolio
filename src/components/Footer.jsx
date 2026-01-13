import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="section-container">
                <div className="footer-top d-flex justify-content-between align-items-center flex-wrap">
                    <div className="footer-logo mb-4 mb-md-0">
                        T<span>.</span>F
                    </div>
                    <div className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Work</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                <div className="footer-bottom border-top mt-5 pt-4 d-flex justify-content-between align-items-center flex-wrap">
                    <p className="copyright">&copy; {new Date().getFullYear()} Temitope Famakinwa. Designed with precision.</p>
                    <div className="footer-socials">
                        <a href="#">Github</a>
                        <a href="#">Linkedin</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
