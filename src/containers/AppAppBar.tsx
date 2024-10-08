import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RouteName from '../components/RouteName';
import { paramsContainer } from '../types/common';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar({currentContent, setCurrentContent}: paramsContainer) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const triggerContentMobile = (value: number) => {    
    setOpen(false); 
    setCurrentContent(value);
  }

  return (
    <AppBar
      position="fixed"
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none' }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>        
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <RouteName currentContent={currentContent} setCurrentContent={setCurrentContent} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } , ml:6 }}>
              <Button variant="text" sx={{ backgroundColor: currentContent === 1 ? '#383837' : '' }} color="info" size="small" onClick={()=>setCurrentContent(1)}>
                Home
              </Button>
              <Button variant="text" sx={{ backgroundColor: currentContent === 2 ? '#383837' : '' }} color="info" size="small" onClick={()=>setCurrentContent(2)}>
                Services
              </Button>
              <Button variant="text" sx={{ backgroundColor: currentContent === 3 ? '#383837' : '' }} color="info" size="small" onClick={()=>setCurrentContent(3)}>
                Technologies
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem sx={{ backgroundColor: currentContent === 1 ? '#383837' : '' }} onClick={()=>triggerContentMobile(1)}>Home</MenuItem>
                <MenuItem sx={{ backgroundColor: currentContent === 2 ? '#383837' : '' }} onClick={()=>triggerContentMobile(2)}>Services</MenuItem>
                <MenuItem sx={{ backgroundColor: currentContent === 3 ? '#383837' : '' }} onClick={()=>triggerContentMobile(3)}>Technologies</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}