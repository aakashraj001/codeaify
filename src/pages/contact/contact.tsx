import React from 'react';

const Contact = React.forwardRef((props, ref) => (
  <section ref={ref} style={{ height: '100vh', padding: '50px', background: '#b0b0b0' }}>
    <h2>Contact</h2>
    <p>This is the Contact section content.</p>
  </section>
));

export default Contact;
