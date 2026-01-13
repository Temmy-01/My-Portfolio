import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'EduTAMS & OGSERA',
            scope: 'GovTech / Education',
            video: '/videos/Digital Lesson Note.mov', // Assuming this fits best
            link: 'https://ogsera.ogunstate.gov.ng/',
            tags: ['Laravel', 'MySQL', 'System Design'],
            desc: 'Education Management Information System managing 2M+ students for Ogun State.'
        },
        {
            title: 'InvoiceGun',
            scope: 'Business Automation',
            video: '/videos/Billing system.mov',
            link: 'https://invoicegun.com/',
            tags: ['Vue.js', 'FinTech', 'Billing'],
            desc: 'Automated billing system helping organizations manage finance and supply chains.'
        },
        {
            title: 'JustFood ERP',
            scope: 'Supply Chain',
            video: '/videos/Justfood.mov',
            link: 'https://justfoodsales.com/',
            tags: ['ERP', 'Logistics', 'Finance'],
            desc: 'Comprehensive ERP for food supply chain, product management, and CRM.'
        },
        {
            title: 'ActionAid ERP',
            scope: 'NGO Management',
            video: '/videos/Actionaiderp.mov',
            link: 'https://actionaiderp.com/',
            tags: ['ERP', 'NGO', 'Resource Planning'],
            desc: 'Integrated solution for NGOs and government agencies to optimize operations.'
        },
        {
            title: 'WasteEasyNG',
            scope: 'CleanTech',
            image: '/images/wasteeasy.png', // Updated image
            link: 'https://wasteeasy.xyzstaging.com/',
            tags: ['EcoTech', 'Vue.js', 'Logistics'],
            desc: 'Connecting households with reliable waste collectors for a cleaner Nigeria.'
        },
        {
            title: 'Lifecard Coinvest',
            scope: 'FinTech / Real Estate',
            image: '/images/life-card.png',
            link: 'https://lifecardcoinvest.com/',
            tags: ['React', 'Investment', 'Real Estate'],
            desc: 'Investment platform offering fractional real estate ownership and high ROI.'
        }
    ];

    return (
        <section id="projects" className="projects-premium bg-surface">
            <div className="section-container">
                <header className="project-header text-center mb-5 pb-5">
                    <span className="section-tag">Case Studies</span>
                    <h2 className="section-title">Selected Works</h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        A collection of high-impact applications solving real-world problems
                        in Education, FinTech, and Enterprise Resource Planning.
                    </p>
                </header>

                <div className="project-waterfall">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} index={idx} />
                    ))}
                </div>

                <div className="text-center mt-5 pt-5">
                    <a href="https://github.com/Temmy-01?tab=repositories" target="_blank" rel="noreferrer" className="btn-outline-premium">
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }

    return (
        <motion.div
            className="project-entry"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div
                className="project-frame"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="project-media">
                    {project.video ? (
                        <>
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                className="project-video"
                                poster={project.image || ''} // Fallback to image if available
                            >
                                <source src={project.video} type="video/mp4" />
                                <source src={project.video} type="video/quicktime" />
                            </video>
                            <div className="play-hint">
                                <Play size={30} fill="currentColor" />
                            </div>
                        </>
                    ) : (
                        <img src={project.image} alt={project.title} />
                    )}

                    <div className="project-overlay">
                        <div className="hover-actions">
                            <a href={project.link} target="_blank" rel="noreferrer" className="action-btn">
                                <ExternalLink size={20} /> Visit Site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-info mt-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <span className="scope-tag">{project.scope}</span>
                            <h3 className="project-title">{project.title}</h3>
                        </div>
                    </div>
                    <p className="project-desc">{project.desc}</p>
                    <div className="project-tags">
                        {project.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects;
