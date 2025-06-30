import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaLink, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiPython, SiFirebase, SiExpress } from 'react-icons/si';
import { BadgeCheck } from 'lucide-react';
import { BiLinkExternal } from 'react-icons/bi';
const Skills = () => {
  const frontendSkills = [
{ name: 'HTML', icon: <FaHtml5 className="text-white" /> },
{ name: 'CSS', icon: <FaCss3Alt className="text-white" /> },
{ name: 'React', icon: <FaReact className="text-white" /> },
{ name: 'JavaScript', icon: <SiJavascript className="text-white" /> },
{ name: 'Tailwind CSS', icon: <SiTailwindcss className="text-white" /> },
{ name: 'Firebase', icon: <SiFirebase className="text-white" /> },
{ name: 'Axios', icon: <FaLink className="text-white" /> },
  ];

  const backendSkills = [
   { name: 'Node.js', icon: <FaNodeJs className="text-white" /> },
{ name: 'Python', icon: <SiPython className="text-white" /> },
{ name: 'MongoDB', icon: <SiMongodb className="text-white" /> },
{ name: 'API Integration', icon: <BiLinkExternal className="text-white" /> },
{ name: 'Express.js', icon: <SiExpress className="text-white" /> },
{ name: 'JWT', icon: <FaKey className="text-white" /> },
  ];

  return (
    <section id="skills" className="py-20 ">
        <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-center mb-16">Skills</h2>
      <div className="container mx-auto px-4 lg:px-8">
        
  <div className="  mx-auto px-4">
  {/* Single Card */}
  <div className="card h-[300px] space-y-16 pt-15 bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
 {/* Frontend Section */}
<div className="overflow-hidden group">
  <div className="animate-marquee">
    <div className="flex gap-4 w-max">
      {[...frontendSkills, ...frontendSkills].map((skill, index) => (
        <div
          key={index}
          className="p-4 bg-neutral flex items-center gap-7 rounded-xl "
        >
          <div className="text-2xl">{skill.icon}</div>
          <p className="text-sm font-medium text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  
{/* Backend Section */}
<div className="overflow-hidden group">
  <div className="animate-marquee-reverse">
    <div className="flex gap-3 w-max">
      {[...backendSkills, ...backendSkills].map((skill, index) => (
        <div
          key={index}
          className="p-4 bg-neutral flex items-center gap-7 rounded-xl"
        >
          <div className="text-2xl">{skill.icon}</div>
          <p className="text-sm font-medium text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
</div>

      </div>
    </section>
  );
};

export default Skills;
