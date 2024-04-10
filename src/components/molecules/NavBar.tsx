import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import LogOutButton from '../atoms/LogOutButton';
import AddButton from '../atoms/AddButton';
import HomeButton from '../atoms/HomeButton';



export default function MenuAppBar() {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <HomeButton />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Authors
          </Typography>
        

          <AddButton />
         <LogOutButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
