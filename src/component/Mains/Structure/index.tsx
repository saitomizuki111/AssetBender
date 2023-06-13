import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'

const useStyles = makeStyles({
  main: {
    display: 'flex',
  },
  circle: {
    borderRadius: '100%',
    background: 'white',
    width: '5px',
    height: '5px',
    marginRight: '8px',
    marginTop: '8px'
  },
  check: {
    borderRadius: '100%',
    background: '#EC9935',
    width: '5px',
    height: '5px',
    marginRight: '8px',
    marginTop: '8px'
  }
})

const MyButton = ({ children }: any, props: any) => {
  const classes = useStyles()

  return (
    <div className={classes.main}>
      {
        props.type === "check" ? <div><Box className={classes.check} /></div> : <div><div className={classes.circle} /></div>
      }
      <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important' }}>
        {children}
      </Typography><br />
    </div >
  )
}

export default MyButton