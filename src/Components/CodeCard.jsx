import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeCard = () => {
  const [copied, setCopied] = useState(false);

  const code = `// About Yusuf Abdullah
const developer = {
  name: "Yusuf Abdullah",
  role: "Full Stack Developer",
  expertise: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  passionateAbout: [
    "clean code",
    "user-centric design",
    "learning new technologies"
  ],
  currentlyBuilding: "RoomSync, LearnMate, JobHive"
};

console.log("Welcome to my portfolio 🚀");`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg w-full p-0 overflow-hidden">
      {/* Filename Header */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-2 border-b border-gray-200">
        <span className="text-sm font-medium text-gray-600">about.js</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code Block */}
      <pre className="text-sm text-gray-800 font-mono px-5 py-4 whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeCard;
