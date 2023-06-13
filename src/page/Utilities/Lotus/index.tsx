import styles from './index.module.scss'
import { Typography } from '@mui/material'
import { TeammateCard } from '../../../component'
import { addvisors } from '../../../constant/ui/utilitiespage/lotus'
import flower from '../../../assets/imgs/flower.png'

const Lotus = () => {
  return (
    <div>
      <Typography variant="h3" color="white">Green Lotus</Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={flower} alt="flower" style={{ margin: '0 auto' }} className={`${styles.flower}`} />
      </div>
      <Typography variant="h5" color="white" sx={{ textAlign: 'center' }}>The Green Lotus advisory board is an honorary collection which will provide G.O.A.T Fund advisors voting rights within the fund.</Typography>
      <Typography variant="h5" color="white" sx={{ textAlign: 'center', marginBottom: '200px' }}>Green Lotus members develop connections with key individuals, groups, and companies in the Web3 space in order to further the opportunities of our holders.</Typography>

      <Typography variant="h1" color="#FFB13D" style={{ marginBottom: '51px', textAlign: 'center' }}>ADVISORS</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} className={`${styles.lotuscardpan}`}>
        {
          addvisors.map((addvisor: any, index: any) => {
            return (
              <TeammateCard
                key={index}
                img={addvisor.img}
                name={addvisor.name}
                job={addvisor.job}
                text={addvisor.text1}
                bonus={addvisor.text2}
                twitter={addvisor.twitter}
                linkedin={addvisor.linkedin}
                colorType={1}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Lotus