import React from 'react';
import '../styles/Stats.css';

const Stats = () => {
    const statsData = [
        { label: 'Awards', value: '2' },
        { label: 'Complete Projects', value: '4' },
        { label: 'Happy Customers', value: '4' },
        { label: 'Cups of coffee', value: '500+' }
    ];

    return (
        <section className="stats-section py-5">
            <div className="container">
                <div className="row">
                    {statsData.map((stat, index) => (
                        <div className="col-md-3 col-6 text-center mb-4 mb-md-0" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="stat-box">
                                <strong className="d-block text-primary fs-1 fw-bold">{stat.value}</strong>
                                <span className="text-muted text-uppercase small letter-spacing-1">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
