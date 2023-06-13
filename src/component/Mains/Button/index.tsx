import { makeStyles } from '@mui/styles'
import { Button, Typography } from '@mui/material'

const useStyles = makeStyles({
  btn: {
    borderRadius: '50px !important',
    maxWidth: '185px !important',
    width: '100% !important',
    height: '54px !important',
  },
})

const MyButton = (props: any) => {
  const classes = useStyles()

  return (
    <>
      {
        props?.mode === "contained" ?
          <Button className={classes.btn} variant="contained" color="neutral"><Typography variant="button" color="white">{props.text}</Typography></Button> :
          <Button className={classes.btn} variant="outlined" color="neutral"><Typography variant="button" color="white">{props.text}</Typography></Button>
      }
    </>
  )
}

export default MyButton