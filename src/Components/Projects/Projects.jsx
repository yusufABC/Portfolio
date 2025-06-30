import { CircleEllipsis, Github, Link } from 'lucide-react';
import React from 'react';
import project1 from '../../assets/roomSync.png'
import project2 from '../../assets/LearnMate.png'
import Modal from './Modal';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import project3 from '../../assets/JobHive.png'; 
const Projects = () => {
  return (
    <section id="projects" className="  max-w-vw mx-auto py-20 px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">My Projects</h2>
      <div className='grid gap-10'>
        {/* project 1  */}

        <div className="relative right-10 w-auto md:w-4/5 group md:h-[500px]   overflow-hidden rounded-xl shadow-lg border-gray-300 border-8 bg-white mx-auto">

          {/* Image container that expands on hover */}
          <div className="absolute top-0 right-0 h-full w-1/2 group-hover:w-full transition-all duration-700 ease-in-out overflow-hidden">
            <img
              src={project1}
              className="h-full w-full object-cover transform transition-transform duration-700 ease-in-out "
              alt="Project"
            />
            {/* See More Button Overlay */}
            <div className="  absolute inset-0 bg-black/40 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Github /> Github
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Link />  Live Link
              </button>
              <button
                onClick={() => document.getElementById('project1-modal')?.showModal()}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition"
              >
                <CircleEllipsis /> See More
              </button>

            </div>
          </div>

          {/* Text Section */}
          <div className="relative space-y-5 z-10 w-1/2 h-full p-3 transition-opacity duration-700 ease-in-out group-hover:opacity-0 mt-10">
            <h2 className="text-5xl font-lato font-bold mb-5">RoomSync!</h2>
            <p className="text-gray-600 font-lato text-xl  mb-4">Find Your Room Anywhere in Bangladesh.RoomSync helps users discover and list rental rooms across Bangladesh with ease. Features include location-based search, JWT-authenticated listings, and a mobile-first design built using React, Firebase, and Tailwind CSS.</p>

            <div className="flex flex-wrap gap-4 mt-10">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium shadow-sm">Tailwind</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium shadow-sm">Firebase</span>
            </div>
          </div>
        </div>
        {/* project 2 */}
        <div className="relative left-15 w-auto md:w-4/5 group md:h-[500px]   overflow-hidden rounded-xl shadow-lg border-gray-300 border-8 bg-white mx-auto">

          {/* Image container that expands on hover */}
          <div className="absolute top-0 right-0 h-full w-1/2 group-hover:w-full transition-all duration-700 ease-in-out overflow-hidden">
            <img
              src={project2}
              className="h-full w-full object-cover transform transition-transform duration-700 ease-in-out "
              alt="Project"
            />
            {/* See More Button Overlay */}
            <div className="  absolute inset-0 bg-black/40 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Github /> Github
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Link />  Live Link
              </button>
              <button
                onClick={() => document.getElementById('learnmate-modal').showModal()}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition"
              >
                <CircleEllipsis /> See More
              </button>


            </div>
          </div>

          {/* Text Section */}
          <div className="relative space-y-10 z-10 w-1/2 h-full p-3 mt-10 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
            <h2 className="text-5xl font-lato font-bold mb-5">LearnMate</h2>
            <p className="text-gray-600 font-lato text-xl  mb-4">LearnMate is a modern e-learning platform where users can browse, enroll in, and manage online courses. Designed for both learners and administrators, it features secure JWT-based authentication, role-based dashboards, and MongoDB-powered course filtering.</p>
   
            <div className="flex flex-wrap gap-4 mt-10">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium shadow-sm">Tailwind</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium shadow-sm">Firebase</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">MongoDB</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Axios</span>
            </div>
          </div>
        </div>
        {/* project-3  */}
      <div className="relative right-15 w-auto md:w-4/5 group md:h-[500px]   overflow-hidden rounded-xl shadow-lg border-gray-300 border-8 bg-white mx-auto">


          {/* Image container that expands on hover */}
          <div className="absolute top-0 right-0 h-full w-1/2 group-hover:w-full transition-all duration-700 ease-in-out overflow-hidden">
            <img
              src={project3}
              className="h-full w-full object-cover transform transition-transform duration-700 ease-in-out "
              alt="Project"
            />
            {/* See More Button Overlay */}
            <div className="  absolute inset-0 bg-black/40 flex gap-3 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Github /> Github
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition">
                <Link />  Live Link
              </button>
                <button
                onClick={() => document.getElementById('jobhive-modal').showModal()}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-black transition"
              >
                <CircleEllipsis /> See More
              </button>

            </div>
          </div>

          {/* Text Section */}
          <div className="relative z-10 mt-10 w-1/2 space-y-5 h-full p-6 transition-opacity duration-700 ease-in-out group-hover:opacity-0">
            <h2 className="text-5xl font-lato font-bold mb-5">JobHive</h2>
            <p className="text-gray-600 font-lato text-xl  mb-4">JobHive is a professional job portal connecting job seekers and companies through an elegant and responsive web interface. It enables users to explore job listings, view detailed company profiles, and apply with one click.</p>
                    <div className="flex flex-wrap gap-4 mt-10">
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium shadow-sm">Tailwind</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">Axios</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm">React</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">Jwt</span>
              <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium shadow-sm">Firebase</span>
            </div>
          </div>
        </div>
      </div>
      <Modal />
      <Modal2/>
      <Modal3/>
    </section>
  );
};

export default Projects;
