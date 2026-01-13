import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud, Cpu } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout size={24} />,
            skills: ["Vue.js (2 & 3)", "React.js", "Javascript (ES6+)", "Inertia.js", "HTML5 & CSS3", "Bootstrap", "Tailwind"]
        },
        {
            title: "Backend Engineering",
            icon: <Server size={24} />,
            skills: ["PHP & Laravel", "MySQL & SQL", "Node.js", "RESTful APIs", "System Design"]
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud size={24} />,
            skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD Pipelines", "Helm"]
        },
        {
            title: "Methodologies & Tools",
            icon: <Cpu size={24} />,
            skills: ["Microservices", "Serverless", "Agile & Scrum", "Git & GitHub", "Jira"]
        }
    ];

    return (
        <section id="skills" className="skills-premium bg-deep">
            <div className="section-container">
                <header className="text-center mb-5 pb-4" data-aos="fade-up">
                    <span className="section-tag">Technical Arsenal</span>
                    <h2 className="section-title">Core Competencies</h2>
                </header>

                <div className="row g-4">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="skill-category-card h-100">
                                <div className="cat-header mb-4">
                                    <div className="icon-wrapper mb-3">
                                        {category.icon}
                                    </div>
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="skill-tags">
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.span
                                            key={sIdx}
                                            className="skill-pill"
                                            whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-blue)', color: '#fff' }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
