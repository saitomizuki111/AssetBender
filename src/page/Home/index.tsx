import { Box, Typography } from '@mui/material'
import { About, Structure, Accordion, Slicker, Chart } from '../../component'
import { makeStyles } from '@mui/styles'
import { textgroup } from '../../constant/ui/homepage/proceed'
import { main } from '../../constant/ui/homepage/FAQ'
import { image_files } from '../../constant/ui/homepage/marketplaces'
import { chainlinks } from '../../constant/ui/homepage/nfts'

import styles from './index.module.scss'

const useStyles = makeStyles({
  side: {
    maxWidth: '548px',
    width: '100%',
    display: 'block',
  },
  faqSide: {
    maxWidth: '740px',
    width: '100%',
    display: 'block',
    marginRight: '20px'
  },
  main: {
    maxWidth: '1520px',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0px auto 254px auto',
    flexDirection: 'row'
  },
  marketplace: {
    maxWidth: '1520px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: '0px auto',
    alignItems: 'center'
  }
})

const Homepage = () => {
  const classes = useStyles()

  const chartPercents = [50, 25, 15, 10]
  const chartColors = ['#BA3939', '#5B2222', '#752F2F', '#9F4444']
  const labels = ['50% ABC Platform', '25% G.O.A.T Fund', '15% $ABC TGE Liquidity Pool', '10% Launchpad Fees']

  return (
    <Box sx={{ paddingTop: '124px' }} className={`${styles.back}`}>
      <Slicker />
      <About />
      <Box>
        <Typography variant="h1" color="#FF5050" sx={{ margin: '0px 0px 70px', textAlign: 'center' }}>MINT PROCEEDS ALLOCATION</Typography>
        <Box className={`${classes.main} ${styles.charpan}`}>
          <div className={`${styles.chart}`}>
            <Chart
              percent={chartPercents}
              color={chartColors}
              labels={labels}
              legend={false}
              type={1}
            />
          </div>
          {
            textgroup.map((texts: any, index: any) => {
              return (
                <Box className={`${classes.side} ${styles.left}`} key={index} sx={{ textAlign: 'left' }}>
                  {
                    texts.map((text: any, index: any) => {
                      return (
                        <Box className={classes.side} key={index} sx={{ marginBottom: '45px' }}>
                          <Typography variant="h3" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '15px' }}>{text.header}</Typography>
                          {
                            text.text.map((te: any, index: any) => {
                              return (
                                <Structure key={index}>{te}</Structure>
                              )
                            })
                          }
                        </Box>
                      )
                    })
                  }
                </Box>
              )
            })
          }
        </Box>

        <Box className={`${classes.main} ${styles.accordion}`} sx={{ justifyContent: 'left', margin: '0px auto 20px' }}>
          <Typography variant="h1" color="#FF5050" sx={{ margin: '0px 30px 50px 30px', textAlign: 'left' }} className={`${styles.faqheader}`}>
            FREQUENTLY ASKED QUESTIONS
          </Typography>
        </Box>
        <Box className={`${classes.main} ${styles.accordion}`}>
          {
            main.map((ma: any, index: any) => {
              return (
                <Box className={`${classes.faqSide} ${styles.accordionside}`} key={index}>
                  {
                    ma.map((m: any, index: any) => {
                      return (
                        <Accordion key={index} header={m.header} text={m.text} colorType={1} />
                      )
                    })
                  }
                </Box>
              )
            })
          }
        </Box>
        <Typography variant="h1" color="#FF5050" sx={{ textAlign: 'center' }}>AFFILIATES, INTEGRATIONS, AND PARTNERSHIPS</Typography>
        <Box className={classes.marketplace}>
          {
            chainlinks.map((info: any, index: any) => {
              return (
                <a href={`${info.url}`} target="blank">
                  <img src={info.img} alt="marketplace" key={index} style={{ margin: '10px 0px' }} />
                </a>
              )
            })
          }
        </Box>

        <Typography variant="h1" color="#FF5050" sx={{ textAlign: 'center', paddingTop: '143px' }}>AS SEEN ON</Typography>
        <Box className={classes.marketplace}>
          {
            image_files.map((info: any, index: any) => {
              return (
                <a href={`${info.url}`} target="blank">
                  <img src={info.img} alt="marketplace" key={index} style={{ margin: '10px 0px', width: '90px' }} className={`${styles.market}`} />
                </a>
              )
            })
          }
        </Box>
      </Box>
    </Box >
  )
}

export default Homepage