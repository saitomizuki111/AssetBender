import { makeStyles } from '@mui/styles'
import styled from 'styled-components'
import { Box, Typography } from '@mui/material'
import styles from './index.module.scss'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

const useStyles = makeStyles({
  social: {
    display: 'flex'
  },
  line: {
    marginBottom: '20px'
  }
})

const Main = styled.div`
  max-width:710px;
  width:50%;
  height:440px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding:15px;
  display:block;
  justify-content:center;
  margin:20px;
  @media(max-width:1550px){
    height:520px;
  }
`

const FounderCard = (props: any) => {
  const classes = useStyles()
  return (
    <Main className={`${styles.founderpan}`}>
      <div style={{ display: 'flex' }} className={`${styles.uparea}`}>
        <div style={{ margin: '15px' }} className={`${styles.founderimg}`}><img src={props.img} alt="founder" style={{ width: '100%', borderRadius: '10px' }} className={`${styles.realimg}`} /></div>
        <Box className={`${styles.textpan2}`} style={{ marginTop: '15px' }}>
          <div style={{ display: 'block' }} className={`${styles.headerarea}`}>
            <Typography variant="h4" color="white" className={classes.line} sx={{ marginBottom: '10px' }}>{props.name}</Typography>
            <Typography variant="h5" color="#BFFF8C" className={classes.line} sx={{ marginBottom: '10px' }}>{props.job}</Typography>
            <div style={{ margin: '20px 0px' }}>
              {
                props.twitter !== "" ?
                  <a
                    className={`${styles.link}`}
                    href={props.twitter}
                    target="blank">
                    <FaTwitter style={{
                      color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
                      marginRight: '10px'
                    }} />
                  </a>
                  :
                  <FaTwitter style={{
                    color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
                    marginRight: '10px'
                  }} />
              }
              {
                props.linkedin !== '' ?
                  <a
                    className={`${styles.link}`}
                    href={props.linkedin}
                    target="blank">
                    <FaLinkedin style={{
                      color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
                      marginRight: '10px'
                    }} />
                  </a>
                  :
                  <FaLinkedin style={{
                    color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
                    marginRight: '10px'
                  }} />
              }
            </div>
          </div>
          <Typography variant="h6" color="white" className={`${styles.uptext}`}>{props.text}</Typography>
        </Box>
      </div>
      <Typography variant="h6" color="white" className={`${styles.undertext}`}>{props.text}</Typography>
    </Main >
  )
}

export default FounderCard