import React from 'react';

const DaisyExample = () => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl border border-base-200'>
      <div className='card-body'>
        <h2 className='card-title'>DaisyUI Integration</h2>
        <p>This component demonstrates DaisyUI v5 with Tailwind CSS v4.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Primary</button>
          <button className='btn btn-secondary'>Secondary</button>
          <button className='btn btn-accent'>Accent</button>
        </div>
        <div className='mt-4'>
          <div className='badge badge-outline'>Tailwind v4</div>
          <div className='badge badge-outline ml-2'>DaisyUI v5</div>
        </div>
      </div>
    </div>
  );
};

export default DaisyExample;
