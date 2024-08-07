'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MdDashboard,MdDateRange } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import Calend from '../calender/page';
import Events from '../event/page';
import Userc from '../dashboardcontent/page';
import Ccontent from '../classroomcont/page';
import Routine from '../routinec/page';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ color: 'black' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', minHeight: '100vh'}}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: 300,boxShadow:'0px 0px 10px black'}} 
      >
        <Tab icon={<MdDashboard />} label="DashBoard" {...a11yProps(0)} sx={{ color: 'black', fontWeight: 'bold',flexDirection: 'row' }} />
        <Tab icon={<SiGoogleclassroom />} label="Classroom" {...a11yProps(1)} sx={{ color: 'black', fontWeight: 'bold',flexDirection: 'row' }} />
        <Tab icon={<SlCalender />} label="Calender" {...a11yProps(2)} sx={{ color: 'black', fontWeight: 'bold',flexDirection: 'row' }} />
        <Tab icon={<MdDateRange />} label="Routine" {...a11yProps(3)} sx={{ color: 'black', fontWeight: 'bold',flexDirection: 'row'}} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Userc/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Ccontent/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='ml-40 mt-20 flex flex-row justify-between space-x-32' ><Calend/> <Events/></div>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Routine/>
      </TabPanel>
    </Box>
  );
}
