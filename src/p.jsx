import React from 'react';
import Slider from '@mui/material/Slider';

const PrettoSlider = (props) => {
  return (
    <Slider
      {...props}
      sx={{
        color: '#0B453C',
        height: 2,
        '& .MuiSlider-thumb': {
          height: 12,
          width: 12,
          border: '2px solid currentColor',
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 50%',
          backgroundColor: '#0B453C',
          transformOrigin: 'bottom left',
        },
      }}
    />
  );
};

const CustomizedSlider = () => {
  return (
    <div className='bg-gray-200 rounded-md shadow mt-5 py-12'>
      <div className='flex px-3'>
        <div className='mr-2 mt-[2px]' style={{ whiteSpace: 'nowrap' }}>
          <p>Flow temperature F</p>
        </div>
        <div className='container'>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={0}
            min={0}
            max={200}
          />
        </div>
      </div>
      <div className='flex px-3 mt-14'>
        <div className='mr-2 mt-[2px]' style={{ whiteSpace: 'nowrap' }}>
          <p>Return temperature F</p>
        </div>
        <div className='container'>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={0}
            min={0}
            max={200}
          />
        </div>
      </div>
      <div className='flex px-3 mt-14'>
        <div className='mr-2 mt-[2px]' style={{ whiteSpace: 'nowrap' }}>
          <p>Glycol Mix %</p>
        </div>
        <div className='container'>
          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={0}
            min={0}
            max={50}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomizedSlider;
