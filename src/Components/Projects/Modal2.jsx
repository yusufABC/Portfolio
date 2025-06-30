import React from 'react';
import project2 from '../../assets/LearnMate.png';
import { Github, Link, X } from 'lucide-react';

const Modal2 = () => {
  return (
    <dialog id="learnmate-modal" className="modal">
      <div className="modal-box w-full max-w-5xl max-h-screen overflow-y-auto p-6 rounded-xl bg-white">
        {/* Close Button */}
        <form method="dialog" className="modal-action absolute top-4 right-4">
          <button className="btn btn-sm btn-circle bg-white btn-ghost">
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Project Screenshot */}
        <img
          src={project2}
          alt="LearnMate Screenshot"
          className="w-full h-72 sm:h-96 object-cover rounded-lg mb-6"
        />

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-lato font-extrabold mb-4 text-center">LearnMate</h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-6 text-justify">
          LearnMate is a comprehensive course management platform where users can browse, enroll in, and manage
          courses efficiently. Built with modern technologies for performance and user experience.
        </p>

        {/* Technology Stack */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3">🛠 Technology Stack</h4>
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Axios'].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3">🚧 Challenges & Solutions</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li><b>JWT Auth</b> — Secure token-based auth with role-based protection.</li>
            <li><b>MongoDB Filtering</b> — Efficient search & filter with advanced queries.</li>
            <li><b>Axios Interceptors</b> — Clean token header management in all requests.</li>
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h4 className="text-xl font-semibold mb-3">🚀 Future Plans</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>Integrate video streaming for lectures</li>
            <li>Admin analytics dashboard</li>
            <li>Real-time chat between instructors and students</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://github.com/your-username/learnmate"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline text-black border-gray-700 hover:bg-gray-800 hover:text-white"
          >
            <Github /> GitHub
          </a>
          <a
            href="https://learnmate.vercel.app"
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

export default Modal2;
