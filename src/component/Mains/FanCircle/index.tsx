import { Typography } from '@mui/material'
import styled from 'styled-components'
import styles from './index.module.scss'

const FanCircle = (props: any) => {
  return (
    <div style={{ display: 'flex' }} className={`${styles.fancircle}`}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={props.image} alt="fan" style={{ width: '200px', height: '200px', marginBottom: '20px' }} />
        <Typography variant="h5" color="white" sx={{ maxWidth: '250px', width: '100%', textAlign: 'center' }}>{props.text}</Typography>
      </div>
    </div>
  )
}

export default FanCircle;