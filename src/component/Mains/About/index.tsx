import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import { main_text, temp, trade2earn, learn2earn } from '../../../constant/ui/homepage/about'
import styles from './index.module.scss'
import Structure from '../Structure'
import { MyButton } from '../../../component'

const useStyles = makeStyles({
  back: {
    display: 'flex',
    justifyContent: 'center',
    padding: '211px 0px 226px'
  },
  body: {
    maxWidth: '1380px',
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '30px',
    padding: '65px 70px 95px',
    margin: '0 auto',
  },
  side: {
    maxWidth: '671px',
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  down: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})

const Disclaimer = () => {
  const classes = useStyles()

  return (
    <div>
      <a style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', textDecoration: 'none' }} href="#scrollToAbout">
        <MyButton mode="contained" text="ABOUT US" />
      </a>
      <Box className={`${classes.back}`}>
        <Box className={`${classes.body} ${styles.body}`} id="scrollToAbout">
          <Box sx={{ marginBottom: '30px' }}>
            <Typography variant="h1" color="#FF5050"> ABOUT ASSET BENDER NFT</Typography>
          </Box>
          <Box sx={{ marginBottom: '30px' }}>
            <Typography variant="h6" color="white" sx={{ fontSize: '16px' }}>{main_text}</Typography>
          </Box>
          <Box className={`${classes.down} ${styles.down}`}>
            {
              temp.map((te: any, index: any) => {
                return (
                  <Box className={`${classes.side} ${styles.side}`} key={index}>
                    <Box key={index}>
                      <Box sx={{ marginBottom: '20px' }}><Typography variant="h3" color="white">{te.header}</Typography></Box>
                      <Box sx={{ marginBottom: '20px' }}><Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important' }}>{te.text}</Typography></Box>
                    </Box>
                    {/* <MyButton mode="outlined" text="READ MORE" /> */}
                  </Box>
                )
              })
            }
          </Box>

          <Typography variant="h2" color="white" sx={{ margin: '63px 0px' }}>Asset Bender Coin (ABC) Platform</Typography>

          <Box className={`${classes.down} ${styles.down}`}>
            <Box className={`${classes.side} ${styles.side}`}>
              <Typography variant="h4" color="white" sx={{ marginBottom: '37px' }}>{trade2earn.header}</Typography>
              <Typography variant="h6" color="white" sx={{ marginBottom: '37px', fontSize: '16px !important', fontWeight: '400 !important' }}>{trade2earn.text1}</Typography>
              <Typography variant="h6" color="white" sx={{ marginBottom: '37px', fontSize: '16px !important', fontWeight: '400 !important' }}>{trade2earn.text2}</Typography>
              {
                trade2earn.structure.map((text: any, index: any) => {
                  return (
                    <Structure key={index}>{text}</Structure>
                  )
                })
              }
              <Typography variant="h6" color="white" sx={{ marginTop: '37px', fontSize: '16px !important', fontWeight: '400 !important' }}>{trade2earn.text3}</Typography>
            </Box>
            <Box className={`${classes.side}  ${styles.side}`}>
              <Typography variant="h4" color="white" sx={{ marginBottom: '37px' }}>{learn2earn.header}</Typography>
              <Typography variant="h6" color="white" sx={{ marginBottom: '37px', fontSize: '16px !important', fontWeight: '400 !important' }}>{learn2earn.text1}</Typography>
              {
                learn2earn.structure1.map((text: any, index: any) => {
                  return (
                    <Structure key={index}>{text}</Structure>
                  )
                })
              }
              <Typography variant="h6" color="white" sx={{ margin: '37px 0px', fontSize: '16px !important', fontWeight: '400 !important' }}>{learn2earn.text2}</Typography>
              {
                learn2earn.structure2.map((text: any, index: any) => {
                  return (
                    <Structure key={index}>{text}</Structure>
                  )
                })
              }
            </Box>
          </Box>
        </Box >
      </Box>
    </div>
  )
}

export default Disclaimer