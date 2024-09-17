import React from 'react';

const Feature = React.forwardRef((props, ref) => (
  <section ref={ref} className='h-[100vh] w-full pt-[18vh]'>
    <div className='w-[70vw] mx-auto'>
    <h2>About</h2>
    <p>This is the Contact section content.</p>
    </div>
  </section>
));

export default Feature;
