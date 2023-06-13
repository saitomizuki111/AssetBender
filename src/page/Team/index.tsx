import React from 'react'
import styles from './index.module.scss'
import { Box, Typography } from '@mui/material'
import { FounderCard, TeammateCard, TypeCard } from '../../component'
import { founders } from '../../constant/ui/teampage/foundercard'
import { teams } from '../../constant/ui/teampage/teamcard'
import { types } from '../../constant/ui/teampage/typecard'

const Team = () => {
  return (
    <div className={`${styles.back}`}>
      <div className={`${styles.back_inner}`}>
        <Typography variant="h1" color="#BFFF8C" sx={{ textAlign: 'center', margin: '113px', fontSize: '64px' }}>THE TEAM</Typography>

        <div style={{ maxWidth: '1560px', width: '100%', margin: '0 auto' }}>
          <Typography variant="h2" color="white" sx={{ textAlign: 'left', marginLeft: '20px' }}>FOUNDERS</Typography>
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }} className={`${styles.foundercardpan}`}>
          {
            founders.map((founder: any, index: any) => {
              return (
                <FounderCard
                  img={founder.img}
                  name={founder.name}
                  job={founder.job}
                  text={founder.text}
                  twitter={founder.twitter}
                  linkedin={founder.linkedin}
                />
              )
            })
          }
        </Box>

        <div style={{ maxWidth: '1520px', width: '100%', margin: '0 auto', marginTop: '120px' }}>
          <Typography variant="h2" color="white" sx={{ textAlign: 'left', marginBottom: '20px' }}>CORE TEAM</Typography>
        </div>
        <Box
          className={`${styles.teammatecardpan}`}
          sx={{ display: 'flex', justifyContent: 'center', maxWidth: '1520px', margin: '0 auto', marginBottom: '148px', flexWrap: 'wrap', gridGap: '173px' }}
        >
          {
            teams.map((team: any, index: any) => {
              return (
                <TeammateCard
                  img={team.img}
                  name={team.name}
                  job={team.job}
                  text={team.text}
                  colorType={2}
                  twitter={team.twitter}
                  linkedin={team.linkedin}
                />
              )
            })
          }
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1575px', margin: '0 auto' }} className={`${styles.typecardpan}`}>
          {
            types.map((type: any, index: any) => {
              return (
                <TypeCard name={type.name} job={type.job} text={type.text} type={type.type} />
              )
            })
          }
        </Box>
      </div>
    </div>
  )
}

export default Team