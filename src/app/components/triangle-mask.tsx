import React from 'react';

const TriangleMask = ({ id }: {id: string}) => {
  return (
    <div id={id} >
      <img 
        src="assets/images/tpstry.jpeg"
        alt=""
        style={{
          width: '320px',
          height: '320px',
          clipPath: 'polygon(50% 0, 83% 100%, 17% 100%)'
        }}
      />
    </div>
  );
};

export default TriangleMask;

