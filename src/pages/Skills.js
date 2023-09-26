import React, { useState } from "react";

import '../styles/Skills.css';
import Nav from '../components/Nav';

import SkillSection from "../components/SkillSection";
import SkillPopup from "../components/SkillPopup";
import skillsData from "../skillsData"; // An array of skills data


function Skills() {

    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    };

    const handleClosePopup = () => {
        setSelectedSkill(null);
    };

    return (
        <div className="Skills">
            <Nav />
            <h1>My Skills</h1>
            <p className="skills-intro">
            As a Full Stack Engineer with a passion for innovation and a diverse skill set, 
            this page is where I showcase the technical expertise and knowledge I've accumulated on my journey through the world of technology. 
            <br /><br />
            Below, you'll find a comprehensive list of my skills, spanning programming languages, frameworks, web development concepts, and much more.
            Feel free to explore each skill, and if you're curious about my experience or projects related to a particular skill, just <u>click on it</u> for more details.
            </p>
            <div className="skill-sections">
                {skillsData.map((section) => (
                    <SkillSection
                    key={section.id}
                    sectionTitle={section.title}
                    skills={section.skills}
                    onSkillClick={handleSkillClick}
                    />
                ))}
                {selectedSkill && (
                    <SkillPopup
                    skill={selectedSkill}
                    onClose={handleClosePopup}
                    />
                )}
            </div>

        </div>
    );
}

export default Skills;