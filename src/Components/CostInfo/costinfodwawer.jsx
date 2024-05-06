import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Sorter from '../../Assets/sorter.png'
import { DrawerIcon, MainDrawer} from './costinfostyle';
import CostInfoContainer from './costinfo';


export default function CostInfoDrawer() {
  const [open, setOpen] = React.useState(false);


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ padding:'10px 20px;', width:'300px;'}} role="presentation" onClick={toggleDrawer(false)}>
      <CostInfoContainer />
    </Box>
  );

  return (
    < MainDrawer>
      <Button className='Button' onClick={toggleDrawer(true)}>
        <DrawerIcon>
          <img  src={Sorter} alt="Sorter icon" />
        </DrawerIcon>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </MainDrawer>
  );
}
