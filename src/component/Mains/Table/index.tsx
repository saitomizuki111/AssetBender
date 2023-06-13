import React from 'react'
import styles from './index.module.scss'
import { table } from '../../../constant/ui/utilitiespage/platform'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Row = styled.div`
  text-align:left;
  max-width:450px;
  width:100%;
  border:1px solid #EC9935;
`
const Table = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        table.map((ta: any, index: any) => {
          return (
            <div style={{ display: 'block', maxWidth: '450px', width: '100%' }}>
              <Row key={index}>
                <Typography variant="h2" color="#EC9935" sx={{ padding: '10px' }}>{ta.header}</Typography>
              </Row>
              {
                ta.column.map((column: any, index: any) => {
                  return (
                    <Row key={index}>
                      <Typography variant="h3" color="white" sx={{ padding: '10px' }} className={`${styles.column}`}>{column}</Typography>
                    </Row>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
export default Table