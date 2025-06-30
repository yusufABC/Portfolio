import React from 'react';
import CodeCard from './CodeCard';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about" className="rounded-4xl max-w-6xl mx-auto py-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">About Me</h2>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I specialize in modern JavaScript frameworks, particularly React, and have extensive 
                experience with backend technologies like Node.js and Python. I believe in writing 
                code that is not only functional but also maintainable and scalable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Right: JavaScript Code Block */}
      <div className="space-y-6">
        <Fade direction='up' triggerOnce='true'>

  <CodeCard />
        </Fade>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
