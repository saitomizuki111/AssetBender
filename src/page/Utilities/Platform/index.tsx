import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import { trade2earn, learn2earn, temp, waytoearn } from '../../../constant/ui/utilitiespage/platform'
import { Structure, Table, FanCircle } from '../../../component'
import pic1 from '../../../assets/imgs/fans/pic1.png'
import pic2 from '../../../assets/imgs/fans/pic2.png'
import pic3 from '../../../assets/imgs/fans/pic3.png'
import arrow1 from '../../../assets/imgs/fans/arrow1.png'
import arrow2 from '../../../assets/imgs/fans/arrow2.png'
import styles from './index.module.scss'

const Up = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  width:100%;
  @media(max-width:830px){
    flex-direction:column;
  }
`
const Side = styled.div`
  max-width:670px;
  width:100%;
`
const Line = styled.div`
  max-width:250px;
  width:100%;
  position: relative;
  border: 5px dashed white;
  top: 103px;
  border-style: dashed;
  border-left: none;
  border-right: none;
  border-bottom: none;
  @media(max-width:885px){
    display:none;
  }
`
const Platform = () => {
  return (
    <>
      <Typography variant="h2" color="white" sx={{ marginBottom: '37px' }}>Asset Bender Coin (ABC) Platform</Typography>
      <Up className={`${styles.up}`}>
        <Side>
          <Typography variant="h4" color="white" sx={{ marginBottom: '37px' }}>{trade2earn.header}</Typography>
          <Typography variant="h5" color="white" sx={{ marginBottom: '37px' }}>{trade2earn.text1}</Typography>
          <Typography variant="h5" color="white" sx={{ marginBottom: '37px' }}>{trade2earn.text2}</Typography>
          {
            trade2earn.structure.map((text: any, index: any) => {
              return (
                <Structure key={index}>{text}</Structure>
              )
            })
          }
          <Typography variant="h5" color="white" sx={{ marginTop: '37px' }}>{trade2earn.text3}</Typography>
        </Side>
        <Side style={{ marginLeft: '20px' }} className={`${styles.side}`}>
          <Typography variant="h4" color="white" sx={{ marginBottom: '37px' }}>{learn2earn.header}</Typography>
          <Typography variant="h5" color="white" sx={{ marginBottom: '37px' }}>{learn2earn.text1}</Typography>
          {
            learn2earn.structure1.map((text: any, index: any) => {
              return (
                <Structure key={index}>{text}</Structure>
              )
            })
          }
          <Typography variant="h5" color="white" sx={{ margin: '37px 0px' }}>{learn2earn.text2}</Typography>
          {
            learn2earn.structure2.map((text: any, index: any) => {
              return (
                <Structure key={index}>{text}</Structure>
              )
            })
          }
        </Side>
      </Up>

      <Typography variant="h4" color="white" sx={{ marginTop: '67px', textAlign: 'center' }}>ABC Platform Business Model</Typography>
      <Typography variant="h5" color="white" sx={{ margin: '37px 0px', textAlign: 'center', lineHeight: '21.8px' }}>
        Our business model is a blend of B2B and B2C. Businesses purchase $ABC to airdrop to users who complete tasks onboarding
        them into their ecosystem; ABC Platform takes percentage of this revenue.
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', flexDirection: 'row' }} className={`${styles.fanpan}`}>
        <FanCircle image={pic1} isEnd={false} text="Brands request exclusive deals to onboard new users to Web3 using our ABC platform." />
        <img src={arrow1} alt="arrow" style={{ width: '120px', height: '60px', marginTop: '80px' }} className={`${styles.arrow}`} />
        <FanCircle image={pic2} isEnd={false} text="Traders refer and build their network on the platform to earn additional $ABC." />
        <img src={arrow2} alt="arrow" style={{ width: '120px', height: '60px', marginTop: '80px' }} className={`${styles.arrow}`} />
        <FanCircle image={pic3} isEnd={true} text="Users buy and spend $ABC to access traders’ alpha channels, copy trading bot of high net worth traders, and information about how the G.O.A.T Fund is trading." />
      </div>

      <Typography variant="h4" color="white" sx={{ marginTop: '67px', textAlign: 'left' }}>How is our business scalable and sustainable?</Typography>
      <Typography variant="h5" color="white" sx={{ margin: '37px 0px', textAlign: 'left', lineHeight: '21.8px' }}>
        As we phase into development and growth of our ABC platform, we will scale-up the on-boarding process for both new users
        and companies or projects utilizing our ecosystem.
      </Typography>

      <Table />

      <Typography variant="h5" color="white" sx={{ margin: '50px 0px' }}>{temp.text1}</Typography>
      {
        temp.structure1.map((text: any, index: any) => {
          return (
            <Structure key={index}>{text}</Structure>
          )
        })
      }
      <Typography variant="h5" color="white" sx={{ margin: '37px 0px' }}>{temp.text2}</Typography>
      <Typography variant="h5" color="white" sx={{ marginTop: '37px' }}>{temp.text3}</Typography>

      <Up style={{ marginTop: '40px', marginBottom: '86px' }}>
        <Side>
          {
            temp.structure2.map((text: any, index: any) => {
              return (
                <Structure key={index}>{text}</Structure>
              )
            })
          }
        </Side>
        <Side>
          {
            temp.structure3.map((text: any, index: any) => {
              return (
                <Structure key={index}>{text}</Structure>
              )
            })
          }
        </Side>
      </Up>

      <Typography variant="h1" color="#EC9935" sx={{ marginBottom: '37px' }}>WAYS TO EARN $ABC ON OUR PLATFORM</Typography>
      {
        waytoearn.map((text: any, index: any) => {
          return (
            <Structure type="check">{text}</Structure>
          )
        })
      }
    </>
  )
}

export default Platform