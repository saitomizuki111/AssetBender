import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { useState } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: '20px',
      maxWidth: '740px',
      borderRadius: '50px',
    },
  }),
);

const MyAccordion = (props: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [isclick, setIsClick] = useState(false)
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      className={classes.root}
      style={{
        border: props.colorType === 1 ? '1px solid #FF5050' : '1px solid #FFB13D',
      }}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          background: props.colorType === 1
            ? !isclick ? 'rgba(0, 0, 0, 0.3)' : 'linear-gradient(95.24deg, #8B3131 0%, #3D1515 100%)'
            : !isclick ? 'rgba(0, 0, 0, 0.3)' : 'linear-gradient(95.18deg, rgba(245, 160, 59, 0.3) 0%, rgba(241, 100, 40, 0.3) 100%)',
          borderRadius: '50px !important'
        }}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            padding: '8px 30px',
            borderRadius: '50px !important'
          }}
          onClick={() => setIsClick(!isclick)}
        >
          <Typography color="white" variant="h4" sx={{ fontSize: '18px !important', fontWeight: '600 !important' }}>{props.header}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0px 30px 30px 30px' }}>
          {
            props.text.map((text: string, index: number) => {
              return (
                <Typography color="white" variant="h4" sx={{ fontSize: '16px !important', fontWeight: '400 !important' }} key={index}>
                  {text}
                </Typography>
              )
            })
          }
        </AccordionDetails>
      </Accordion>
    </div >
  );
}

export default MyAccordion