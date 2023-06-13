import { text, faqs } from '../../../constant/ui/utilitiespage/fund'
import { Typography } from '@mui/material'
import { processes } from '../../../constant/ui/utilitiespage/fund'
import { ProcessPart, Chart, Accordion } from '../../../component'
import styles from './index.module.scss'
import arrow from '../../../assets/imgs/arrow.png'

const Fund = () => {
  const chartPercents = [1, 33, 33, 33]
  const labels = ['1% NFT Buybacks', '33% Trading NFTs', '33% Funding seed and private round allocations', '33% Trading cryptocurrencies']
  const chartColors = ['#FFED8C', '#B1A252', '#CAB442', '#F0D753']
  return (
    <>
      <Typography variant="h2" color="white" sx={{ marginBottom: '50px' }}>Group of Anonymous Traders (G.O.A.T) Fund</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <Chart
          percent={chartPercents}
          color={chartColors}
          labels={labels}
          legend={true}
          type={2}
        />
      </div>
      {
        text.map((te: any, index: any) => {
          return (
            <Typography variant="h5" color="white" key={index} sx={{ marginBottom: '30px' }}>{te}</Typography>
          )
        })
      }
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '110px' }} className={`${styles.processpan}`}>
        {
          processes.map((process: any, index: any) => {
            return (
              <div key={index}>
                <div style={{ display: 'flex', alignItems: 'center' }} >
                  <ProcessPart key={index} image={process.image} ischeck={process.ischeck} text={process.text} />
                  {!process.isend
                    ? <>
                      <div style={{ width: '100px', height: '5px', background: '#FFB13D' }} className={`${styles.line}`} />
                      <img src={arrow} alt="arrow" style={{ width: '25px', height: '25px' }} className={`${styles.arrow}`} />
                    </>
                    : <></>
                  }
                </div>
                {
                  !process.isend
                    ? <div style={{ width: '5px', height: '50px', background: '#FFB13D', margin: '0 auto', display: 'none' }} className={`${styles.verticalline}`} />
                    : <></>
                }

              </div>
            )
          })
        }
      </div>
      <Typography variant="h1" color="#FFB13D" sx={{ margin: '140px 0px 40px' }}>HOW DOES THE G.O.A.T FUND OPERATE?</Typography>
      <Typography variant="h5" color="white" sx={{ marginBottom: '40px' }}>
        The details found below are subject to change based on market conditions and other variables.
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '71px' }} className={`${styles.accordionpan}`}>
        {
          faqs.map((faq: any, index: any) => {
            return (
              <div key={index} style={{ maxWidth: '700px', width: '100%', marginRight: '20px' }} className={`${styles.accordionside}`}>
                {
                  faq.map((f: any, index: any) => {
                    return (
                      <Accordion key={index} header={f.header} text={f.text} colorType={2} />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Fund;