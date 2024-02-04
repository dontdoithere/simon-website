import React from 'react';
import './SkillCard.css';
import { Code } from 'phosphor-react';
import { SKILLS } from '../../../Utils/Data';

const SkillCard = ({title, icon, isActive, onClick }) => {
    return(
        <div
         className={`skill-card ${isActive ? "active" : ""}`}
         onClick={() => onClick()}
        >
        <div className="skill-icon">
            <img src={icon} alt={title} />
        </div>

        <span>{title}</span>
        </div>
    )
}
export default SkillCard

