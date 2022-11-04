import React from 'react'
import '../Styles/style.css';
import { IconContext } from "react-icons";
import { DiPostgresql, DiPython, DiWordpress, DiGoogleAnalytics } from "react-icons/di";

const Skills = () => {
  return (
    <div className="skills">
        <h2>My Skills</h2>
        <div className="skill">
            <IconContext.Provider value={{ className: "skills-icons" }}>
                <DiGoogleAnalytics />
                    <DiWordpress />
                <DiPython />
                <DiPostgresql />
        </IconContext.Provider>
        </div>
   
    </div>
  )
}

export default Skills