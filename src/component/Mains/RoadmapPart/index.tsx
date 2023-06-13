import styled from 'styled-components'
import styles from './index.module.scss'

const Circle = styled.div`
  border-radius:100%;
  width:15px;
  height:15px;
  margin-top:7px;
`

const Line = styled.div`
  width:1px;
  height:70px;
  background:white;
  margin-left:7.2px;
`

const RoadmapPart = (props: any) => {
  return (
    <>
      <div style={{ display: 'block', height: '80px', margin: '0px 63px' }} className={`${styles.roadmappart}`}>
        <div style={{ width: 'fitContent' }}>
          <Circle style={{ background: props.ischeck ? '#6AD7FA' : 'white' }} />
        </div>
        {
          props.isshow ? <Line /> : <></>
        }

      </div>
    </>
  )
}

export default RoadmapPart