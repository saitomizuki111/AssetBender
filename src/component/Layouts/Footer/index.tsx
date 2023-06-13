import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import Logo from '../../../assets/imgs/logo.png'
import Twitter from '../../../assets/imgs/twitter_icon.png'
import Discord from '../../../assets/imgs/discord_icon.png'
import Medium from '../../../assets/imgs/medium_icon.png'
import styles from './index.module.scss'
import { text, menus } from '../../../constant/ui/homepage/footer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMenu } from '../../../redux/actions'

const useStyles = makeStyles({
  body: {
    width: '100%',
    background: '#1A1A1A',
    padding: '107px 0px 95px',
  },
  body_inner: {
    maxWidth: '1520px',
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
    flexDirection: 'row'
  },
  text: {
    maxWidth: '850px',
    width: '100%'
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '120px'
  },
  down: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '145px',
    width: '90%',
    margin: '0 auto',
    padding: '64px 30px 40px'
  },
  info: {
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '44px',
    textAlign: 'center'
  }
})

const Footer = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = (index: any) => {
    dispatch(setMenu(index))
  }

  return (
    <>
      <Box sx={{ border: '1px solid #696969' }} />
      <Box className={classes.body}>
        <Box className={`${classes.body_inner} ${styles.body_inner}`}>
          <div className={`${styles.footer}`}><img src={Logo} alt="log" className={`${styles.logo}`} /></div>
          <Box className={`${classes.text} `}>
            <Typography className={`${styles.text} ${styles.footer}`}>{text}</Typography>
          </Box>
          <Box sx={{ display: 'flex', maxWidth: '380px', width: '100%', justifyContent: 'space-between' }} className={`${styles.footer}`}>
            {
              menus.map((menu: any, index: any) => {
                return (
                  <Box className={`${classes.menu}`} key={index}>
                    {
                      menu.map((m: any, index: any) => {
                        return (
                          <div style={{ cursor: 'pointer', marginBottom: '20px' }} key={index}>
                            <Link to={`${m.route}`} onClick={() => { handleClick(m.number); window.scrollTo(0, 0) }} className={`${styles.link}`}>
                              <Typography variant="h3" color="white" className={` ${styles.menu}`}>{m.menu}</Typography>
                            </Link>
                          </div>
                        )
                      })
                    }
                  </Box>
                )
              })
            }
            <Box className={`${classes.menu}`} >
              <div style={{ cursor: 'pointer', marginBottom: '20px' }}>
                <Link to="/utilities/lotus" onClick={() => { handleClick(5); window.scrollTo(0, 0) }} className={`${styles.link}`}>
                  <Typography variant="h3" color="white" className={` ${styles.menu}`}>GREEN LOTUS</Typography>
                </Link>
              </div>

              <div style={{ cursor: 'pointer', marginBottom: '20px' }} >
                <Link to={`/team`} className={`${styles.link}`} onClick={() => { window.scrollTo(0, 0) }}>
                  <Typography variant="h3" color="white" className={` ${styles.menu}`}>TEAM</Typography>
                </Link>
              </div>

              <div style={{ cursor: 'pointer', marginBottom: '20px' }} >
                <a href={`https://medium.com/@assetbendernft`} target="_blank" rel="noreferrer" className={`${styles.link}`}>
                  <Typography variant="h3" color="white" className={` ${styles.menu}`}>MEDIUM</Typography>
                </a>
              </div>

              <div style={{ cursor: 'pointer', marginBottom: '20px', display: 'none' }} >
                <Link to={`#`} className={`${styles.link}`}>
                  <Typography variant="h3" color="white" className={` ${styles.menu}`}>HIRING NOW</Typography>
                </Link>
              </div>
              <div style={{ cursor: 'pointer', marginBottom: '20px', display: 'none' }} >
                <Link to={`#`} className={`${styles.link}`}>
                  <Typography variant="h3" color="white" className={` ${styles.menu}`}>CONTACT US</Typography>
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
        <Box className={classes.down}>

          <a
            className={`${styles.link}`}
            href="https://twitter.com/AssetBenderNFT"
            target="blank">
            <div><img src={Twitter} alt='twitter' className={`${styles.social}`} /></div>
          </a>

          <a
            className={`${styles.link}`}
            href="https://discord.gg/assetbendernft"
            target="blank">
            <div><img src={Discord} alt='discord' className={`${styles.social}`} /></div>
          </a>

          <a
            className={`${styles.link}`}
            href="https://medium.com/@assetbendernft"
            target="blank">
            <div><img src={Medium} alt='medium' className={`${styles.social}`} /></div>
          </a>

        </Box>
        <Box className={classes.info}>
          <Typography className={`${styles.text}`}>© 2022 Asset Bender NFT</Typography>
          <Link to="/disclaimer" onClick={() => { handleClick(6); window.scrollTo(0, 0) }} style={{ textDecoration: 'none' }}>
            <Typography className={`${styles.text2}`}>Disclaimer</Typography>
          </Link>
        </Box>
      </Box >
    </>
  )
}

export default Footer