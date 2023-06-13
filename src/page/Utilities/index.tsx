import React from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import styles from './index.module.scss'
import Platform from './Platform'
import Lotus from './Lotus'
import Fund from './Fund/fund'
import './index.css'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Wrapper = styled(TabPanel)`
  .MuiBox-root{
    position:relative;
    top:0px;
    left:2px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
    background:rgba(0, 0, 0, 0.6) !important;
    padding:69px !important;
    @media(max-width:1024px){
      padding:20px !important;
    }
  }
`
const Header = styled(Box)`
  .MuiBox-root{
    border-bottom:none !important;Header
  }
  .MuiTabs-scroller{
    overflow:auto !important;
    width:100% !important;
  }
  .MuiTabs-scroller::-webkit-scrollbar {
  height:10px;
  margin-top:10px;
}

  .MuiTabs-scroller::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    margin-top:10px;
  }
  
  .MuiTabs-scroller::-webkit-scrollbar-thumb {
    background: rgb(0,0,0,0.3); 
    border-radius: 10px;
    margin-top:10px;
  }

  .MuiTabs-scroller::-webkit-scrollbar-thumb:hover {
    background: rgb(0,0,0,0.3); 
    margin-top:10px;
  }
`
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#1A2828',
    textTransform: 'capitalize'
  },
  menuclick: {
    margin: '0px 2px !important',
    backgroundColor: 'rgba(0, 0, 0, 0.6) !important',
    borderTopLeftRadius: '15px !important',
    borderTopRightRadius: '15px !important',
    color: '#F2A138 !important',
    textTransform: 'capitalize',
    fontFamily: 'Quicksand'
  },
  menunotclick: {
    margin: '0px 2px !important',
    backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
    borderTopLeftRadius: '15px !important',
    borderTopRightRadius: '15px !important',
    color: 'white !important',
    textTransform: 'capitalize',
    fontFamily: 'Quicksand'
  },
  space: {
    marginLeft: '20px'
  },
}));

const Utilities = (props: any) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(props.number);
  const [status, SetStatus] = React.useState(props.number);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (index: number) => {
    SetStatus(index);
    switch (index) {
      case 0:
        navigate("/utilities/platform")
        break;
      case 1:
        navigate("/utilities/fund")
        break;
      case 2:
        navigate("/utilities/lotus")
        break;
      default:
        return
    }
  }

  useEffect(() => {
    setValue(props.number)
    SetStatus(props.number)
  }, [props.number])

  return (
    <div className={`${styles.back}`}>
      <Typography variant="h1" color="#F2A138" sx={{ textAlign: 'center', fontSize: '64px', margin: '93px 0px' }}>Utilities</Typography>
      <Box sx={{ maxWidth: '1520px', width: '95%', margin: '0 auto' }}>
        <Header>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="ABC PLATFORM" {...a11yProps(0)} onClick={() => handleClick(0)} className={status === 0 ? `${classes.menuclick} ${styles.tab}` : `${classes.menunotclick} ${styles.tab}`} />
            <Tab label="G.O.A.T FUND" {...a11yProps(1)} onClick={() => handleClick(1)} className={status === 1 ? `${classes.menuclick} ${styles.tab}` : `${classes.menunotclick} ${styles.tab}`} />
            <Tab label="GREEN LOTUS" {...a11yProps(2)} onClick={() => handleClick(2)} className={status === 2 ? `${classes.menuclick} ${styles.tab}` : `${classes.menunotclick} ${styles.tab}`} />
          </Tabs>
        </Header>
        <Wrapper value={value} index={0}>
          <Platform />
        </Wrapper>
        <Wrapper value={value} index={1}>
          <Fund />
        </Wrapper>
        <Wrapper value={value} index={2}>
          <Lotus />
        </Wrapper>
      </Box>
    </div>
  )
}

export default Utilities
