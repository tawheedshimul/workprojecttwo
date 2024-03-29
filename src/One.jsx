import * as React from 'react';
import { alpha, styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0B453C', 
    },
  },
});

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.primary.main, 
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme.palette.primary.main, 
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ColorSwitches() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GreenSwitch {...label} />
      </div>
    </ThemeProvider>
  );
}
