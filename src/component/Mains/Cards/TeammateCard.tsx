import { makeStyles } from '@mui/styles'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import styles from './index.module.scss'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'

const useStyles = makeStyles({
  social: {
    display: 'flex'
  },
  right: {
    margin: '15px',
    maxWidth: '400px',
    width: '100%'
  },
  line: {
    marginBottom: '20px'
  }
})

const Main = styled.div`
  max-width:250px;
  width:100%:
  display:flex;
  justify-content:center;
  flex-direction:column;
  margin-bottom:20px;

  @media(max-width:1024px){
    max-width:unset !important;
  }
`

const TeammateCard = (props: any) => {
  const classes = useStyles()
  return (
    <Main className={`${styles.teammatepan}`}>
      <div style={{ display: 'flex' }}><img src={props.img} alt="founder" className={`${styles.teammateimg}`} style={{ borderRadius: '10px', width: '250px' }} /></div>
      <div className={`${styles.textpan}`}>
        <Typography variant="h4" color="white" className={classes.line} sx={{ margin: '10px 0px' }}>{props.name}</Typography>
        <Typography variant="h5" className={classes.line} sx={{ marginBottom: '10px', color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C' }}>{props.job}</Typography>
        <div style={{ marginTop: '20px', marginBottom: '10px' }}>
          {
            props.twitter !== '' ?
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
              // <FaTwitter style={{
              //   color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
              //   marginRight: '10px'
              // }} />
              <></>
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
              // <FaLinkedin style={{
              //   color: props.colorType === 1 ? '#FFB13D' : '#BFFF8C',
              //   marginRight: '10px'
              // }} />
              <></>
          }

        </div>
        <Typography variant="h6" color="white" style={{ marginBottom: '15px' }}>{props.text}</Typography>
        <Typography variant="h6" color="white">{props.bonus}</Typography>
      </div>
    </Main>
  )
}

export default TeammateCard