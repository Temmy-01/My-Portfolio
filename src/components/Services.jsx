import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe2, Cloud, Terminal, Palette, BarChart3 } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
    const services = [
        {
            icon: <Code2 size={32} />,
            title: "App Architecture",
            desc: "Engineering scalable foundations using microservices and serverless paradigms."
        },
        {
            icon: <Globe2 size={32} />,
            title: "Global Solutions",
            desc: "Crafting digital experiences that transcend borders with multi-lingual & localized focus."
        },
        {
            icon: <Cloud size={32} />,
            title: "DevOps & Cloud",
            desc: "Optimizing deployment cycles with Docker, Kubernetes, and automated CI/CD pipelines."
        },
        {
            icon: <Terminal size={32} />,
            title: "Backend Mastery",
            desc: "Developing high-performance APIs and robust database schemas with PHP & Laravel."
        },
        {
            icon: <Palette size={32} />,
            title: "Fluid Interfaces",
            desc: "Designing responsive, accessible, and high-fidelity frontends using React & Framer."
        },
        {
            icon: <BarChart3 size={32} />,
            title: "Product Strategy",
            desc: "Consulting on MVP development and roadmap scaling for international startups."
        }
    ];

    return (
        <section id="services" className="services-premium">
            <div className="section-container">
                <header className="mb-5 pb-5 section-header" data-aos="fade-up">
                    <span className="section-tag">Value Proposition</span>
                    <h2 className="section-title">Service Design</h2>
                </header>

                <div className="row g-4">
                    {services.map((s, idx) => (
                        <div key={idx} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={idx * 50}>
                            <div className="service-premium-card">
                                <div className="icon-box-premium">
                                    {s.icon}
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="card-edge"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
