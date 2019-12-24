import React from 'react';
import ParticleField from 'react-particles-webgl';
import config from './ParticleConfig';


export default () => (

  <div style={{ height: "100vh", width: "100%" }}>
    <ParticleField config={config} />
  </div>

);