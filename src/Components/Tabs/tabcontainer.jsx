import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReviewComponent from './review';
import QueAnsComponent from './quan';
import FAQComponent from './faq';
import ContactComponent from './contact';

function TabContainer (props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ItemTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ width: '100%' }}>
      <Box>
        <Tabs value={value}
         onChange={handleChange} aria-label="basic tabs example" 
         sx={{backgroundColor:' rgba(0, 109, 171, 0.20)',
          paddingLeft:'10%', width:'100%',
          '& button.Mui-selected': {backgroundColor: '#006DAB', color:'white'},
          }}>
          <Tab label="Item reviews" {...a11yProps(0)}  className='Title'/>
          <Tab label="Q&A" {...a11yProps(1)} className='Title' />
          <Tab label="FAQ" {...a11yProps(2)}  className='Title'/>
          <Tab label="Contact" {...a11yProps(3)} className='Title' />
        </Tabs>
      </Box>
      <TabContainer value={value} index={0}>
        <ReviewComponent />
      </TabContainer>
      <TabContainer value={value} index={1}>
        <QueAnsComponent />
      </TabContainer>
      <TabContainer value={value} index={2}>
        <FAQComponent />
      </TabContainer>
      <TabContainer value={value} index={3}>
        <ContactComponent /> 
      </TabContainer>
    </Box>
  );
}
