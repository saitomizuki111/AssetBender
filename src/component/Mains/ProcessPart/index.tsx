import styled from 'styled-components'
import { Typography } from '@mui/material'

const Body = styled.div`
  border-radius:15px;
  padding:13px 24px;
  display:flex;
  align-items:center;
  @media(max-width:1560px){
    height:120px;
  }
  @media(max-width:1375px){
    height:103px;
    width:100%;
    padding:13px;
  }
  @media(max-width:1050px){
    // margin-bottom:30px;
  }
`
const ProcessPart = (props: any) => {
  return (
    <>
      <Body
        style={{
          background: props.ischeck ? 'linear-gradient(96.34deg, rgba(0, 255, 163, 0.3) 0%, rgba(3, 225, 255, 0.3) 48.96%, rgba(220, 31, 255, 0.3) 100%)' : 'none',
          border: props.ischeck ? 'linear-gradient(96.344deg, #00FFA3 100%, #03E1FF 100%, #DC1FFF 100%)' : '3px solid #FFB13D'
        }}
      >
        <div style={{ marginRight: '10px' }}><img src={props.image} alt="process" /></div>
        <Typography variant="h5" color="white" sx={{ maxWidth: '173px' }}>{props.text}</Typography>
      </Body>
    </>
  )
}

export default ProcessPart