import React from 'react';

// Forward the ref from parent to this section
const About = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: '100vh', padding: '50px', background: '#f0f0f0' }}>
    <h2>About Us</h2>
    <p>This is the About Us section content.</p>
  </section>
));

export default About;
