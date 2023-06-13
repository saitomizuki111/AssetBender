import { makeStyles } from '@mui/styles'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { Structure } from '../../../component'
import styles from './index.module.scss'

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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding:30px;
  max-width:420px;
  width:100%;
  height:160px;
  display:block;
  justify-content:center;
  margin:20px;
`

const TypeCard = (props: any) => {
  const classes = useStyles()
  return (
    <Main className={`${styles.typepan}`}>
      <Typography variant="h4" color="white" className={classes.line} sx={{ margin: '10px 0px' }}>{props.name}</Typography>
      <Typography variant="h5" color="#BFFF8C" className={classes.line} sx={{ marginBottom: '10px' }}>{props.job}</Typography>
      {
        props.type === "text"
          ? <Typography variant="h6" color="white">{props.text}</Typography>
          : <>
            {
              props.text.map((line: any, index: any) => {
                return (
                  <Structure>
                    <Typography variant="h6" color="white" key={index}>{line}</Typography>
                  </Structure>
                )
              })
            }
          </>
      }
    </Main>
  )
}

export default TypeCard