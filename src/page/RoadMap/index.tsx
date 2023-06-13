import React from 'react'
import styles from './index.module.scss'
import { phase1, phase2, phase3 } from '../../constant/ui/roadmap/roadmap'
import { RoadmapPart } from '../../component'
import { Typography } from '@mui/material'
import pic1 from '../../assets/imgs/roadmaps/pic1.png'
import pic2 from '../../assets/imgs/roadmaps/pic2.png'
import pic3 from '../../assets/imgs/roadmaps/pic3.png'
import styled from 'styled-components'

const Phase = styled.div`
  max-width:1520px;
  width:90%;
  margin:0 auto;
  display:flex;
  justify-content:center;
  // flex-wrap:wrap;
  margin-bottom:93px;
`
const Textline = styled.div`
  max-width:690px;
  width:100%;
  height:69px;
`
const Roadmap = styled.div`
  width:838px;
  // width:100%;
  display:flex;
  justify-content:center;

  @media(max-width:1720px){
    width:738px;
  }
  @media(max-width:1510px){
    width:638px;
  }
  @media(max-width:1300px){
    width:538px;
  }
  @media(max-width:1076px){
    width:448px;
  }
`
const RoadMap = () => {
  return (
    <>
      <Typography variant="h1" color="#6AD7FA" sx={{ textAlign: 'center', marginBottom: '93px', marginTop: '93px', fontSize: '64px' }}>ROADMAP</Typography>
      <div style={{ textAlign: 'center', marginBottom: '51px' }}>
        <Typography variant="h1" color="white">PHASE A</Typography>
      </div>
      <Phase style={{ marginBottom: '0px' }} className={`${styles.phase1}`}>
        <div className={`${styles.phaseimg}`}>
          <img src={pic1} alt="pic1" className={`${styles.roadmappic}`} />
        </div>
        <div className={`${styles.description}`}>
          {
            phase1.map((phase: any, index: any) => {
              return (
                <Roadmap key={index} className={`${styles.roadmap}`}>
                  <RoadmapPart ischeck={phase.ischeck} isshow={phase.lineshow} />
                  <Textline>
                    <Typography variant="h5" color="white" sx={{ fontSize: '18px', fontWeight: '400' }}>{phase.text}</Typography>
                  </Textline>
                </Roadmap>
              )
            })
          }
        </div>
      </Phase>

      <div className={`${styles.back}`}>
        <div style={{ textAlign: 'center', marginBottom: '51px' }}>
          <Typography variant="h1" color="white">PHASE B</Typography>
        </div>
        <Phase className={`${styles.phase2}`}>
          <div className={`${styles.description}`}>
            {
              phase2.map((phase: any, index: any) => {
                return (
                  <Roadmap key={index} className={`${styles.roadmap} ${styles.roadmap2}`}>
                    <Textline>
                      <Typography variant="h5" color="white" style={{ textAlign: 'right' }} className={`${styles.roadmap2text}`} sx={{ fontSize: '18px', fontWeight: '400' }}>{phase.text}</Typography>
                    </Textline>
                    <RoadmapPart ischeck={phase.ischeck} isshow={phase.lineshow} />
                  </Roadmap>
                )
              })
            }
          </div>
          <div className={`${styles.phaseimg}`} style={{ justifyContent: 'flex-start' }}>
            <img src={pic2} alt="pic2" className={`${styles.roadmappic}`} />
          </div>
        </Phase>
      </div>

      <div style={{ background: '#1F3A4C', paddingBottom: '267px' }}>
        <div style={{ textAlign: 'center', marginBottom: '51px' }}>
          <Typography variant="h1" color="white">PHASE C</Typography>
        </div>
        <Phase style={{ marginBottom: '0px' }} className={`${styles.phase1}`}>
          <div className={`${styles.phaseimg}`}>
            <img src={pic3} alt="pic3" className={`${styles.roadmappic}`} />
          </div>
          <div className={`${styles.description}`}>
            {
              phase3.map((phase: any, index: any) => {
                return (
                  <Roadmap key={index} className={`${styles.roadmap}`}>
                    <RoadmapPart ischeck={phase.ischeck} isshow={phase.lineshow} />
                    <Textline>
                      <Typography variant="h5" color="white" sx={{ fontSize: '18px', fontWeight: '400' }}>{phase.text}</Typography>
                    </Textline>
                  </Roadmap>
                )
              })
            }
          </div>
        </Phase>
      </div>
    </>
  )
}

export default RoadMap