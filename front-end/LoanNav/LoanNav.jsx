import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { Platform } from '@unimodules/core'
import style from './LoanNavStyle'

function LoanNav() {
  return (
    <Header style={style.navigator}>
      <Left style={Platform.OS === 'ios' ? style.arrowBack : null}>
        <Button transparent>
          <Icon style={style.navigatorText} name="menu" />
        </Button>
      </Left>
      <Body style={style.navigatorText}>
        <Title style={style.navigatorText}>Loans</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default LoanNav
