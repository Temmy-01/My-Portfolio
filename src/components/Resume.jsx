import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    const experiences = [
        {
            period: "June 2024 - Present",
            role: "Senior Software Developer & DevOps",
            company: "DigitalWeb Application Development Ltd",
            details: "Leading development of enterprise ERPs and billing systems. Managing 12+ applications, orchestrating CI/CD pipelines, and ensuring 99.9% uptime via AWS and Docker architecture.",
            stack: ["AWS", "Docker", "Terraform", "Laravel", "Vue.js", "React.js", "Node.js"]
        },
        {
            period: "June 2024 - Present",
            role: "DevOps Engineer",
            company: "Xapic Technologies",
            details: "Designed GitHub Actions CI/CD pipelines, containerized microservices with Kubernetes, and managed infrastructure as code using Ansible and Terraform.",
            stack: ["Kubernetes", "Helm", "GitHub Actions", "Ansible"]
        },
        {
            period: "Feb 2022 - Present",
            role: "Lead Software Developer",
            company: "EduTAMS Ltd",
            details: "Architected platforms managing 2M+ students (OGSERA, EduTAMS). Optimized DB queries reducing load times by 30%. Mentored a team of 5 developers.",
            stack: ["PHP", "Laravel", "Vue.js", "MySQL", "System Design", "Mentorship"]
        }
    ];

    const education = [
        {
            year: "2020 - 2022",
            degree: "M.Sc. Biosystematics",
            school: "Obafemi Awolowo University",
            note: "Thesis on Fishery Resources"
        },
        {
            year: "2008 - 2014",
            degree: "B.Sc. Microbiology",
            school: "Obafemi Awolowo University",
            note: ""
        }
    ];

    const certifications = [
        "SQL (Advanced) - HackerRank",
        "DevOps, Microservices, Agile - Coursera",
        "Vue.js & React.js - Udemy",
        "Problem Solving (Intermediate) - HackerRank"
    ];

    return (
        <section id="resume" className="resume-premium bg-surface">
            <div className="section-container">

                {/* Header */}
                <div className="row mb-5" data-aos="fade-up">
                    <div className="col-lg-6">
                        <span className="section-tag">Career Path</span>
                        <h2 className="section-title">Professional <br /> Experience</h2>
                    </div>
                    <div className="col-lg-6 pt-4">
                        <p className="description">
                            Dynamic Full Stack Software Developer with 5+ years building scalable applications
                            and optimizing DevOps workflows for enterprise reliability.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="experience-timeline">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="timeline-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <div className="timeline-dot"></div>
                                    <span className="period">{exp.period}</span>
                                    <h3 className="role">{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <p className="details">{exp.details}</p>
                                    <div className="stack-tags mt-3">
                                        {exp.stack.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-5 ps-lg-5">
                        <div className="education-column" data-aos="fade-left">
                            <h3 className="column-title mb-4">Education</h3>
                            {education.map((edu, idx) => (
                                <div key={idx} className="edu-card mb-4">
                                    <span className="year">{edu.year}</span>
                                    <h4>{edu.degree}</h4>
                                    <p>{edu.school}</p>
                                </div>
                            ))}

                            <h3 className="column-title mb-4 mt-5">Certifications</h3>
                            <ul className="cert-list">
                                {certifications.map((cert, idx) => (
                                    <li key={idx}>
                                        <span className="check-icon">✓</span> {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
