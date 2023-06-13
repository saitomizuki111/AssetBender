import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import styles from './index.module.scss'

const useStyles = makeStyles({
  back: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 0px 226px'
  },
  body: {
    maxWidth: '1380px',
    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: '30px',
    padding: '65px 70px 95px',
    margin: '0 auto',
  },
  side: {
    maxWidth: '671px',
    width: '48%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  down: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
})

const About = () => {
  const classes = useStyles()

  return (
    <div>
      <Box className={`${classes.back}`}>
        <Box className={`${classes.body} ${styles.body}`} id="scrollToAbout">
          <Box sx={{ marginBottom: '30px' }}>
            <Typography variant="h1" color="#FF5050">Disclaimer</Typography>
          </Box>

          <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '60px' }}>
            Nothing in this Website shall be deemed to constitute a prospectus of any sort or a solicitation for investment, nor does it in any way pertain to an offering or a solicitation of an offer to buy any securities in any jurisdiction. This document is not composed in accordance with, and is not subject to, laws or regulations of any jurisdiction which prohibits or in any manner restricts transactions in respect of, or with use of, digital tokens.
          </Typography>
          <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '60px' }}>
            The information set forth in this Website may not be exhaustive and does not imply any elements of a contractual relationship. The content of this Website is not binding on the Company and the Company reserves the right to change, modify, add, or remove portions of this Website for any reason at any time before, during and after the sale of tokens by updating an amended Website. This Website does not constitute an investment, legal, tax, regulatory, financial, accounting or other advice, and this Website is not intended to provide the sole basis for any evaluation of a transaction on acquiring of the tokens and is expressly not incorporated by reference into any securities offering or similar documents. Prior to acquiring the tokens, a prospective purchaser should consult with his/her own legal, investment, tax, accounting, and other advisors to determine the potential benefits, burdens, and other consequences of such transaction. The Company is under no obligation to update the Website or modify the Website for any inconsistencies or for material changes to the information.
          </Typography>
          <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '60px' }}>
            NFTs are not a digital currency, security, commodity, or any other kind of financial instrument and have not been registered under the Securities Act of 1933, as amended, the securities laws of any State of the United States of America or the securities laws of any other country, including the securities laws of any jurisdiction in which a potential token holder is a resident. The NFTs are not being offered or distributed to, as well as cannot be resold or otherwise alienated by their holders to, citizens of, natural and legal persons, having their habitual residence, location or their seat of incorporation in the country or territory where transactions with NFTs are prohibited or in any manner restricted by applicable laws or regulations. If such restricted person purchases the tokens, such restricted person has done so on an unlawful, unauthorized and fraudulent basis and in this regard, shall bear negative consequences.
          </Typography>
          <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '60px' }}>
            The Company neither offers or distributes the NFTs nor carries on a business (activity) in any regulated activity in the United States, or in other countries and territories where transactions in respect of, or with use of, tokens fall under the restrictive regulations or require from the Company to be registered or licensed with any applicable governmental authorities. Each purchaser of the NFTs is reminded that this Website has been presented to him/her on the basis that he/she is a person into whose attention the document may be lawfully presented in accordance with the laws of the purchaser’s jurisdiction. It is the responsibility of each potential purchaser of the tokens to determine if the purchaser can legally purchase the tokens in the purchaser’s jurisdiction and whether the purchaser can then resell the tokens to another purchaser in any given jurisdiction.
          </Typography>
          <Typography variant="h6" color="white" sx={{ fontSize: '16px !important', fontWeight: '400 !important', marginBottom: '60px' }}>
            Certain statements, estimates and financial information contained in this Website are for informational purposes only, and may constitute forward-looking statements or information. Such forward-looking statements or information involve known and unknown risks and uncertainties which may cause actual events or results to differ materially from the estimates or the results implied or expressed in such forward-looking statements or information. The English language Website is the primary official source of information. The information contained in English language Website may from time to time be translated into other languages. In the course of such translation some of the information contained in the English language Website may be lost, corrupted or misrepresented. The accuracy of such alternative communications cannot be guaranteed. In the event of any conflicts or inconsistencies between such translations and the official English language Website, the provisions of the English language original document shall prevail.
          </Typography>
        </Box >
      </Box>
    </div>
  )
}

export default About