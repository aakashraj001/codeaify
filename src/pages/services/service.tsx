import React from 'react';

const Services = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: '100vh', padding: '50px', background: '#d0d0d0' }}>
    <h2>Services</h2>
    <p>This is the Services section content.</p>
  </section>
));

export default Services;
