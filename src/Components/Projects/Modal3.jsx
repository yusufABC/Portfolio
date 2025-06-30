import React from 'react';
import project3 from '../../assets/JobHive.png'; // make sure this image exists
import { Github, Link, X } from 'lucide-react';

const Modal3 = () => {
  return (
    <dialog id="jobhive-modal" className="modal">
      <div className="modal-box w-full max-w-5xl max-h-screen overflow-y-auto p-6 rounded-xl bg-white">
        {/* Close Button */}
        <form method="dialog" className="modal-action absolute top-4 right-4">
          <button className="btn btn-sm btn-circle btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Screenshot */}
        <img
          src={project3}
          alt="JobHive Screenshot"
          className="w-full h-72 sm:h-96 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-lato font-extrabold mb-4 text-center">JobHive</h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-6 text-justify">
          JobHive is a modern job marketplace web application that connects job seekers with companies.
          It offers job listings, filters by skill/location, detailed company pages, and an intuitive
          apply system — built for scale and user experience.
        </p>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3">🛠 Technology Stack</h4>
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'DaisyUI', 'MongoDB', 'Express.js', 'Node.js', 'JWT'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3">🚧 Challenges & Solutions</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>Built dynamic filtering and search for jobs using MongoDB queries</li>
            <li>Designed a clean and responsive UI for job listings and modals using Tailwind + DaisyUI</li>
            <li>Implemented JWT authentication with protected routes for employers and applicants</li>
            <li>Used React Context for global user/job state management</li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h4 className="text-xl font-semibold mb-3">🚀 Future Plans</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>Add resume upload and applicant dashboard</li>
            <li>Introduce real-time chat between companies and candidates</li>
            <li>Build analytics dashboard for employers</li>
            <li>Launch mobile version with push notifications</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/your-username/jobhive"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-black border-gray-700 hover:bg-gray-800 hover:text-white"
          >
            <Github /> GitHub
          </a>
          <a
            href="https://jobhive.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-black border-gray-700 hover:bg-gray-800 hover:text-white"
          >
            <Link /> Live Site
          </a>
        </div>
      </div>
    </dialog>
  );
};

export default Modal3;
