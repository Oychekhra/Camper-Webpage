import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuBar from '../../../Assets/menu.png'
import { MenuIconImg } from '../style';
import DrawerItems from './draweritems';

export default function RightDrawerComponent() {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ padding:'10px 20px;', width:'300px;'}}
     role="presentation" 
     onClick={toggleDrawer(false)}>
      <DrawerItems />
    </Box>
  );

  return (
    < MenuIconImg>
      <Button className='Button' onClick={toggleDrawer(true)}>
          <img  src={MenuBar} alt="Drawer icon" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}
      anchor='right'
      >
        {DrawerList}
      </Drawer>
    </MenuIconImg>
  );
}
