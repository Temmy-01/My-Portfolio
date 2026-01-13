import React from 'react';
import '../styles/HireMe.css';

const HireMe = () => {
    return (
        <section className="hireme-section py-5 text-center">
            <div className="container py-5">
                <div className="row justify-content-center" data-aos="zoom-in">
                    <div className="col-md-8">
                        <h2 className="mb-4">I'm <span>Available</span> for freelancing</h2>
                        <p className="text-muted mb-5">
                            Have a project in mind? Let's work together to build something amazing.
                            I am open to new opportunities and collaborations.
                        </p>
                        <a href="#contact" className="btn btn-primary py-3 px-5">Hire Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireMe;
