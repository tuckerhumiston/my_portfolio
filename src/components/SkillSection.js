import React from "react";
import '../styles/components/SkillSection.css';

function SkillSection({ sectionTitle, skills, onSkillClick }) {
  return (
    <div className="SkillSection">
      <h2 className="section-title">{sectionTitle}:</h2>
      <ul>
        {skills.map((skill) => (
          <button onClick={() => onSkillClick(skill)}>
            
            <li key={skill.id}>
              {skill.logo && <img src={skill.logo} alt={skill.name} />}
              {skill.name}
            </li>
          </button>

          
        ))}
      </ul>
    </div>
  );
}

export default SkillSection;