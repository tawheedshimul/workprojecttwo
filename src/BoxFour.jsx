import React, { useState } from 'react';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function Boxfour() {
  const [value, setValue] = useState(10); 

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%' }} variant="standard">
        <Input
          type={'number'}
          value={value} 
          onChange={handleChange} 
          sx={{
            '&:after': {
              borderColor: 'red',
            },
          }}
          
          endAdornment={
            <InputAdornment position="end">
              PSI
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}
