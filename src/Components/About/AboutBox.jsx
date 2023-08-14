import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Project Completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Cup Of Coffee</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Satisfied Clients</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Nominees Winner</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;