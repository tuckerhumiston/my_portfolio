import React from "react";
import "../styles/components/SkillPopup.css";

function SkillPopup({ skill, onClose }) {
  return (
    <div className="SkillPopup">
      <div className="skill-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="skill-info">
          
          <h2>{skill.name}:</h2>
          <p dangerouslySetInnerHTML={{ __html: skill.description }}></p>

          <p>Learned at: {skill.learnedAt}</p>
        </div>
        {skill.imageUrl && 
        <div className="skill-image">
          <img src={skill.imageUrl} alt={skill.name} />
        </div>
        }
        
      </div>
      
    </div>
  );
}

export default SkillPopup;