import React from 'react';
import TextPressure from '../assets/TextAnimations/TextPressure/TextPressure';
import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  return (
    <section id='hero' className="min-h-screen flex  items-center justify-center px-4 lg:px-8">
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* <h1 className='font-lato mb-4'>Hey There ! My Name Is</h1> */}

<div style={{position: 'relative', height: '150px'}}>
  <TextPressure
     text="Hey I'm !"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#000000"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
<Fade delay={200} duration={1000} direction='up'>

  <div className='text-6xl  font-bold'>Yusuf Abdullah</div>
    <h1 className='text-4xl ' style={{ paddingTop:'2rem',paddingBottom:'2rem', margin: 'auto 0', fontWeight: 'normal' }}>
        I'am A{' '}
        <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['FullStack Developer', 'Self Learner', 'Coading Enthusiast ']}
           
            cursor
            cursorStyle='_'
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            loop='false'

          
          />
        </span>
      </h1>
         
</Fade>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Passionate about creating elegant solutions to complex problems. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
<Fade direction='down'>
            <div className="flex gap-4">
              <button className="btn btn-neutral text-white px-8">
                View My Work
              </button>
              <button className="btn btn-outline px-8">
                Download CV
              </button>
            </div>
</Fade>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
          <Fade direction='up' triggerOnce='true'>
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-gray-300 shadow-xl">
              <img 
                src="https://i.ibb.co/84rF4PRQ/190f61f3-8193-494f-b534-8f9728cf6934.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;