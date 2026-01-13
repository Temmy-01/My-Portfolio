import React from 'react';
import { Send, MapPin, Phone, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-premium">
            <div className="section-container">
                <div className="contact-card-premium">
                    <div className="row g-0">
                        <div className="col-lg-5">
                            <div className="contact-info-panel h-100">
                                <span className="section-tag">Connection</span>
                                <h2 className="section-title">Start a Conversation</h2>
                                <p className="mb-5">
                                    Have a vision you want to bring to life? Let's collaborate
                                    to build something that matters.
                                </p>

                                <div className="contact-methods">
                                    <div className="method-item mb-4">
                                        <div className="method-icon"><Mail size={20} /></div>
                                        <div>
                                            <span>Email me</span>
                                            <strong>famakinwatemitope@gmail.com</strong>
                                        </div>
                                    </div>
                                    <div className="method-item mb-4">
                                        <div className="method-icon"><Phone size={20} /></div>
                                        <div>
                                            <span>Call me</span>
                                            <strong>+234 703 909 2027</strong>
                                        </div>
                                    </div>
                                    <div className="method-item">
                                        <div className="method-icon"><MapPin size={20} /></div>
                                        <div>
                                            <span>Location</span>
                                            <strong>Lagos, Nigeria</strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-links-premium mt-auto pt-5">
                                    <a href="#"><Github size={20} /></a>
                                    <a href="#"><Linkedin size={20} /></a>
                                    <a href="#"><Twitter size={20} /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="contact-form-panel p-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <label>Your Name</label>
                                            <input type="text" placeholder="John Doe" />
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <label>Your Email</label>
                                            <input type="email" placeholder="john@example.com" />
                                        </div>
                                        <div className="col-12 mb-4">
                                            <label>The Topic</label>
                                            <input type="text" placeholder="Project Inquiry" />
                                        </div>
                                        <div className="col-12 mb-5">
                                            <label>The Message</label>
                                            <textarea rows="5" placeholder="Tell me about your vision..."></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn-premium w-100">
                                                Send Message <Send size={18} className="ms-2" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
