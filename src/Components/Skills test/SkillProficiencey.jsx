import React from 'react';
import SkillCard from './SkillCard';
import { SiReact, SiJavascript, SiTailwindcss, SiFirebase, SiMongodb, SiExpress, SiGit, SiGithub, SiVercel } from 'react-icons/si';
  const skills = [
    { skill: 'React', percentage: 70, icon: SiReact },
    { skill: 'JavaScript', percentage: 85, icon: SiJavascript },
    { skill: 'Tailwind CSS', percentage: 75, icon: SiTailwindcss },
    { skill: 'FireBase', percentage: 80, icon: SiFirebase },
    { skill: 'MongoDb', percentage: 60, icon: SiMongodb },
    { skill: 'Express', percentage: 55, icon: SiExpress },
    { skill: 'Git', percentage: 80, icon: SiGit },
    { skill: 'Github', percentage: 90, icon: SiGithub },
    { skill: 'Vercel', percentage: 80, icon: SiVercel },
    

  ];

const SkillProficiencey = () => {
    return (
        <>
   
          <div className="min-h-3  py-16 px-4 grid grid-cols-3  items-center gap-6">
      {skills.map((s, index) => (
        <SkillCard
          key={index}
          skill={s.skill}
          percentage={s.percentage}
          icon={s.icon}
        />
      ))}
    </div>
        </>
    );
};

export default SkillProficiencey;