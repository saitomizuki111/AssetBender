import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setMenu } from '../../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    back: {
      width: '100%',
      overflow: 'auto',
      display: 'block',
      justifyContent: 'center'
    }
  })
)

const Back = ({ children }: any) => {
  const classes = useStyles()
  const menuFlag = useSelector((state: any) => state.global.menuType)
  const dispatch = useDispatch()

  useEffect(() => {
    if (window.location.pathname === '/')
      dispatch(setMenu(6))
    else if (window.location.pathname === '/disclaimer')
      dispatch(setMenu(6))
    else if (window.location.pathname === '/roadmap')
      dispatch(setMenu(0))
    else if (window.location.pathname === '/utilities')
      dispatch(setMenu(1))
    else if (window.location.pathname === '/utilities/platform')
      dispatch(setMenu(3))
    else if (window.location.pathname === '/utilities/fund')
      dispatch(setMenu(4))
    else if (window.location.pathname === '/utilities/lotus')
      dispatch(setMenu(5))
    else
      dispatch(setMenu(2))
  }, [window.location.pathname])

  return (
    <div
      className={classes.back}
      style={{
        background: menuFlag === 6
          ? 'linear-gradient(180deg, #391F1F 10.42%, #6F3838 35.94%, #131313 100%)'
          : menuFlag === 0
            ? 'linear-gradient(180deg, #213A48 10.42%, #38616F 35.94%, #131313 100%)'
            : (menuFlag === 1 || menuFlag === 3 || menuFlag === 4 || menuFlag === 5)
              ? 'linear-gradient(180deg, #983116 10.42%, #EC6E20 35.94%, #702A18 100%)'
              : 'linear-gradient(180deg, #424E20 10.42%, #587337 35.94%, #253E19 100%)'
      }}
    >
      {children}
    </div >
  )
}

export default Back