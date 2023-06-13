import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box, Typography, Menu, MenuItem, IconButton, Button } from '@mui/material'
import Logo from '../../../assets/imgs/logo.png'
import Twitter from '../../../assets/imgs/twitter_icon.png'
import Discord from '../../../assets/imgs/discord_icon.png'
import Medium from '../../../assets/imgs/medium_icon.png'
import styles from './index.module.scss'
import more from '../../../assets/imgs/more.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../../../redux/actions'
import styled from 'styled-components'

import axios from 'axios'
import { BACKEND_URL } from '../../../config'

const useStyles = makeStyles({
  body: {
    maxWidth: '1520px',
    width: '95%',
    height: '135px',
    background: 'none',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 0px'
  },
  right: {
    maxWidth: '1062px',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  left_inner: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  right_inner: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  menu: {
    cursor: 'pointer',
  }
})

const MenuButton = styled(Button)`
  padding:15px 0px !important;
  width:185px !important;
  border-radius:50px !important;

  @media(max-width:1230px){
    width:180px !important;
  }
  @media(max-width:1130px){
    width:150px;
  }
`

const Header = () => {

  const [curPrice, setCurPrice] = useState(0);
  useEffect(() => {
    (async () => {
      await getSolPrice3Minutes()
    })()
  }, [])
  const classes = useStyles()
  const menuFlag = useSelector((state: any) => state.global.menuType)
  const dispatch = useDispatch()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const getSolPrice3Minutes = async () => {
    try {
      let solPrice: any = await axios.get(`${BACKEND_URL}/api/setting`)
      setCurPrice(solPrice.data.data.value)
      setInterval(async () => {
        let solPrice: any = await axios.get(`${BACKEND_URL}/api/setting`)
        setCurPrice(solPrice.data.data.value)
      }, 10000)
    } catch (e) {
      setCurPrice(0)
    }
  }
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLinkClick = (index: any) => {
    dispatch(setMenu(index))
  }

  useEffect(() => {
    if (window.location.pathname === '/')
      dispatch(setMenu(6))
    else if (window.location.pathname === '/roadmap')
      dispatch(setMenu(0))
    else if (window.location.pathname === '/utilities')
      dispatch(setMenu(1))
    else if (window.location.pathname === '/utilities/platform')
      dispatch(setMenu(3))
    else if (window.location.pathname === '/utilities/fund')
      dispatch(setMenu(4))
    else if (window.location.pathname === '/utilities/lotus')
      dispatch(setMenu(5))
    else
      dispatch(setMenu(2))
  }, [window.location.pathname])

  return (
    <Box className={classes.body}>
      <Box>
        <Link to='/'>
          <div onClick={() => handleLinkClick(6)}><img src={Logo} alt="log" className={`${styles.logo}`} /></div>
        </Link>
      </Box>
      <Box>
        <Typography variant="h3" color="white" style={{ marginRight: '30px' }}>
          {
            curPrice !== 0 ?
              <>
                <span style={{ color: "#FF5050" }}>1</span> SOL / <span style={{ color: "#FF5050" }}>{`${curPrice}`}</span> USD
              </>
              :
              <>Loading...</>
          }
        </Typography>
      </Box>
      <Box className={`${classes.right} ${styles.right}`}>
        <Box className={classes.left_inner} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link to='/roadmap' className={`${styles.link}`} onClick={() => handleLinkClick(0)}>
            <MenuButton style={{ background: menuFlag === 0 ? "rgba(0, 0, 0, 0.3)" : "none" }}>
              <Typography color="white" variant="h3">ROADMAP</Typography>
            </MenuButton>
          </Link>
          <Link to='/utilities/platform' className={`${styles.link}`} onClick={() => handleLinkClick(1)}>
            <MenuButton
              style={{
                background: menuFlag === 1 || menuFlag === 3 || menuFlag === 4 || menuFlag === 5
                  ? "rgba(0, 0, 0, 0.3)"
                  : "none"
              }}
            >
              <Typography color="white" variant="h3">UTILITIES</Typography>
            </MenuButton>
          </Link>
          <Link to='/team' className={`${styles.link}`} onClick={() => handleLinkClick(2)}>
            <MenuButton style={{ background: menuFlag === 2 ? "rgba(0, 0, 0, 0.3)" : "none" }}>
              <Typography color="white" variant="h3">TEAM</Typography>
            </MenuButton>
          </Link>
          <a
            className={`${styles.link}`}
            href="https://docs.google.com/presentation/d/1RsjoPbyte1BVxrH5pVM6zFPxmcexS4bs/edit#slide=id.p1"
            target="blank">
            <MenuButton>
              <Typography color="white" variant="h3">PITCH DECK</Typography>
            </MenuButton>
          </a>

          <div style={{ maxWidth: '145px', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <a
              className={`${styles.link} ${styles.sociallink}`}
              href="https://twitter.com/AssetBenderNFT"
              target="blank">
              <div><img src={Twitter} alt='twitter' className={`${styles.social}`} /></div>
            </a>

            <a
              className={`${styles.link} ${styles.sociallink}`}
              href="https://discord.gg/assetbendernft"
              target="blank">
              <div><img src={Discord} alt='discord' className={`${styles.social}`} /></div>
            </a>

            <a
              className={`${styles.link} ${styles.sociallink}`}
              href="https://medium.com/@assetbendernft"
              target="blank">
              <div><img src={Medium} alt='medium' className={`${styles.social}`} /></div>
            </a>
          </div>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <img src={more} alt="more" style={{ width: '40px', height: '40px' }} />

          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >

            <Link to='/' className={`${styles.link}`} onClick={() => handleLinkClick(6)}>
              <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
                <Typography color="#4E2828" variant="h3">Home</Typography>
              </MenuItem>
            </Link>

            <Link to='/roadmap' className={`${styles.link}`} onClick={() => handleLinkClick(0)}>
              <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
                <Typography color="#4E2828" variant="h3">ROADMAP</Typography>
              </MenuItem>
            </Link>

            <Link to='/utilities/platform' className={`${styles.link}`} onClick={() => handleLinkClick(1)}>
              <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
                <Typography color="#4E2828" variant="h3">UTILITIES</Typography>
              </MenuItem>
            </Link>

            <Link to='/team' className={`${styles.link}`} onClick={() => handleLinkClick(2)}>
              <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
                <Typography color="#4E2828" variant="h3">TEAM</Typography>
              </MenuItem>
            </Link>

            <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
              <a
                className={`${styles.link}`}
                href="https://docs.google.com/presentation/d/1RsjoPbyte1BVxrH5pVM6zFPxmcexS4bs/edit#slide=id.p1"
                target="blank">
                <Typography color="#4E2828" variant="h3">PITCH DECK</Typography>
              </a>
            </MenuItem>

            <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
              <a
                className={`${styles.link}`}
                href="https://twitter.com/AssetBenderNFT"
                target="blank">
                <Typography color="#FF5050" variant="h3">Twitter</Typography>
              </a>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
              <a
                className={`${styles.link}`}
                href="https://discord.gg/assetbendernft"
                target="blank">
                <Typography color="#FF5050" variant="h3">Discord</Typography>
              </a>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} sx={{ width: '100%' }}>
              <a
                className={`${styles.link}`}
                href="https://medium.com/@assetbendernft"
                target="blank">
                <Typography color="#FF5050" variant="h3">Medium</Typography>
              </a>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box >
  )
}

export default Header