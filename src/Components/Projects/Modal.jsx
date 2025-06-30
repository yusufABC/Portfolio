import React from 'react';
import project1 from '../../assets/roomSync.png';

const Modal = () => {
    return (
        <div>
            <dialog id="project1-modal" className="modal">
                <div className="modal-box max-w-4xl w-full">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {/* Project Screenshot */}
                    <img src={project1} alt="RoomSync Screenshot" className="w-full h-64 object-cover rounded-lg mb-6" />

                    {/* Project Title & Description */}
                    <h3 className="text-4xl font-lato font-extrabold mb-4">RoomSync</h3>
                    <p className="text-gray-700 mb-6">
                        RoomSync is a platform to find and list rental rooms across Bangladesh. It features authentication, search by location, and an intuitive UX.
                    </p>

                    {/* Tech Stack */}
                <div className="mb-8">
  <h4 className="text-xl font-semibold mb-3">🛠 Technology Stack</h4>
  <div className="flex flex-wrap gap-3">
    {[
      { name: 'React', color: 'bg-blue-100 text-blue-700' },
      { name: 'React Router', color: 'bg-pink-100 text-pink-700' },
      { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-700' },
      { name: 'DaisyUI', color: 'bg-purple-100 text-purple-700' },
      { name: 'Firebase', color: 'bg-orange-100 text-orange-700' },
      { name: 'MongoDB', color: 'bg-green-100 text-green-700' },
      { name: 'Express.js', color: 'bg-gray-200 text-gray-800' },
      { name: 'Node.js', color: 'bg-lime-100 text-lime-700' },
      { name: 'JWT', color: 'bg-yellow-100 text-yellow-800' },
    ].map((tech, idx) => (
      <span
        key={idx}
        className={`px-3 py-1 rounded-full text-sm font-medium shadow ${tech.color}`}
      >
        {tech.name}
      </span>
    ))}
  </div>
</div>

                    {/* Challenges & Solutions */}
                    <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-3">🚧 Challenges & Solutions</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                            <li>
                                **JWT Authentication** — setting up a secure and scalable token-based login system with protected routes.
                            </li>
                            <li>
                                **Responsive UI Design** — achieving clean UI on both desktop and mobile using Tailwind and DaisyUI.
                            </li>
                            <li>
                                **Firebase integration** — handling auth, storage, and deployment under one ecosystem smoothly.
                            </li>
                            <li>
                                **Backend error handling** — properly managing API failures and fallback responses using Express.
                            </li>
                        </ul>
                    </div>

                    {/* Future Plans */}
                    <div>
                        <h4 className="text-xl font-semibold mb-3">🚀 Future Plans</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                            <li>Add real-time chat between hosts and tenants</li>
                            <li>Implement calendar-based booking system</li>
                            <li>Create a dedicated mobile app (React Native or Flutter)</li>
                            <li>Allow user reviews and ratings for rooms and hosts</li>
                            <li>Enable payment gateway for deposits</li>
                        </ul>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
