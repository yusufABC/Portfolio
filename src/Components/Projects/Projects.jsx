import { CircleEllipsis, Github, Link } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import project1 from '../../assets/roomSync.png';
import project2 from '../../assets/LearnMate.png';
import project3 from '../../assets/JobHive.png';
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3';

const ProjectCard = ({ img, title, desc, techs, modalId }) => {
  const [isMobileActive, setIsMobileActive] = useState(false);
  const cardRef = useRef(null);

  const handleClick = () => {
    if (window.innerWidth < 1024) {
      setIsMobileActive(!isMobileActive);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        window.innerWidth < 1024 &&
        isMobileActive &&
        cardRef.current &&
        !cardRef.current.contains(e.target)
      ) {
        setIsMobileActive(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileActive]);

  return (
    <div
      ref={cardRef}
      className="relative md:right-10 w-[500px] md:w-4/5 group md:h-[500px] overflow-hidden rounded-xl shadow-lg border-gray-300 border-8 bg-white mx-auto cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`absolute top-0 right-0 h-full transition-all duration-700 ease-in-out overflow-hidden ${isMobileActive ? 'w-full' : 'w-1/2 lg:group-hover:w-full'
          }`}
      >
        <img
          src={img}
          className="h-full w-full object-cover transform transition-transform duration-700 ease-in-out"
          alt="Project"
        />
        <div
          className={`absolute inset-0 bg-black/90 flex gap-3 items-center justify-center transition-opacity duration-500 z-10 ${isMobileActive ? 'opacity-100' : 'opacity-0'
            } lg:opacity-0 lg:group-hover:opacity-100`}
        >
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
            <Github /> Github
          </button>
          <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
            <Link /> Live Link
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById(modalId)?.showModal();
            }}
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition"
          >
            <CircleEllipsis /> See More
          </button>
        </div>
      </div>

      <div className="relative space-y-5 z-0 w-1/2 h-full p-3 transition-opacity duration-700 ease-in-out group-hover:opacity-0 mt-10">
        <h2 className="text-5xl font-lato font-bold mb-5">{title}</h2>
        <p className="text-gray-600 font-lato text-xl mb-4">{desc}</p>
        <div className="flex  flex-wrap gap-4 mt-10">
          {techs.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${tech.color}`}
            >
              {tech.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="md:max-w-vw mx-auto py-20 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-center mb-16">My Projects</h2>
      <div className='grid gap-10'>
        <ProjectCard
          img={project1}
          title="RoomSync!"
          desc="Find Your Room Anywhere in Bangladesh.RoomSync helps users discover and list rental rooms across Bangladesh with ease. Features include location-based search, JWT-authenticated listings, and a mobile-first design built using React, Firebase, and Tailwind CSS."
          modalId="project1-modal"
          techs={[
            { label: 'React', color: 'bg-blue-100 text-blue-700' },
            { label: 'Tailwind', color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Node.js', color: 'bg-green-100 text-green-700' },
            { label: 'Firebase', color: 'bg-orange-100 text-orange-700' },
          ]}
        />
        <ProjectCard
          img={project2}
          title="LearnMate"
          desc="LearnMate is a modern e-learning platform where users can browse, enroll in, and manage online courses. Designed for both learners and administrators, it features secure JWT-based authentication, role-based dashboards, and MongoDB-powered course filtering."
          modalId="learnmate-modal"
          techs={[
            { label: 'React', color: 'bg-blue-100 text-blue-700' },
            { label: 'Tailwind', color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Node.js', color: 'bg-green-100 text-green-700' },
            { label: 'Firebase', color: 'bg-orange-100 text-orange-700' },
            { label: 'MongoDB', color: 'bg-green-100 text-green-700' },
            { label: 'Axios', color: 'bg-blue-100 text-blue-700' },
          ]}
        />
        <ProjectCard
          img={project3}
          title="JobHive"
          desc="JobHive is a professional job portal connecting job seekers and companies through an elegant and responsive web interface. It enables users to explore job listings, view detailed company profiles, and apply with one click."
          modalId="jobhive-modal"
          techs={[
            { label: 'Tailwind', color: 'bg-cyan-100 text-cyan-700' },
            { label: 'Axios', color: 'bg-blue-100 text-blue-700' },
            { label: 'React', color: 'bg-blue-100 text-blue-700' },
            { label: 'Node.js', color: 'bg-green-100 text-green-700' },
            { label: 'Jwt', color: 'bg-green-100 text-green-700' },
            { label: 'Firebase', color: 'bg-orange-100 text-orange-700' },
          ]}
        />
      </div>
      <Modal />
      <Modal2 />
      <Modal3 />
    </section>
  );
};

export default Projects;
