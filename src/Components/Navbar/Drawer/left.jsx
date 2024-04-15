import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuBar from '../../../Assets/menu.png'
import { MenuIconImg } from '../style';
import DrawerItems from './draweritems';

export default function LeftDrawerComponent() {
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (drawerside, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [drawerside]: open });
  };

  const list = (drawerside) => (
    <Box
    sx={{ width: drawerside === 'top' || drawerside === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(drawerside, false)}
      onKeyDown={toggleDrawer(drawerside, false)}
    >
      <DrawerItems />
    
    </Box>
  );

  return (
    <MenuIconImg $Left>
      {['left'].map((drawerside) => (
        <React.Fragment key={drawerside}>
          <Button onClick={toggleDrawer(drawerside, true)}>
            <img src={MenuBar} alt="" />
          </Button>
          <Drawer
            anchor={drawerside}
            open={state[drawerside]}
            onClose={toggleDrawer(drawerside, false)}
          >
            {list(drawerside)}
          </Drawer>
        </React.Fragment>
      ))}
    </MenuIconImg>
  );
}