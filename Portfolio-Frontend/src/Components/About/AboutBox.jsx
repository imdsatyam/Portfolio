import React from "react";

const AboutBox = () => {
    const technologiesUsed = [
        "React.js", "HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap",
        "Node.js", "API Integration",
        "SQL", "MongoDB",
        "Git", "Jira", "Next.js"
    ];
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">5</h3>
                    <span className="about__subtitle">Projects Completed</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-briefcase"></i>
                <div>
                    <h3 className="about__title">1.5+</h3>
                    <span className="about__subtitle">Years of Experience</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-social-steam"></i>
                <div>
                    <h3 className="about__title">{technologiesUsed.length}</h3>
                    <span className="about__subtitle">Technologies Used</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-list"></i>
                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Projects in Progress</span>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;
