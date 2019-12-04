import React from 'react'
import { Content, Container, Row, Grid } from 'native-base'

import style from './LoanDetailsStyle'
import Detail from './Detail'

function LoanDetails() {
  return (
    <Container>
      <Content>
        <Grid>
          <Detail />
          <Row style={style.chart} />
        </Grid>
      </Content>
    </Container>
  )
}

LoanDetails.navigationOptions = {
  title: 'Loan Details'
}

export default LoanDetails
