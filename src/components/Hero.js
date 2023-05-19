import React from 'react';
import ParticlesBg from 'particles-bg'

const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg type="lines" num={450} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h2>
          Build Your IT Here
          </h2>

          <p className="big">
          You Have A Vision. We Have A Team To Get You There
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
