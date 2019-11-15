import React from 'react'
import { style } from './LoanNavStyle'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { Platform } from '@unimodules/core'

function LoanNav() {
  return (
    <>
      <Header style={style.navigator}>
        <Left style={Platform.OS === 'ios' ? style.arrowBack : null}>
          <Button transparent>
            <Icon style={style.navigatorText} name="menu" />
          </Button>
        </Left>
        <Body style={style.navigatorText}>
          <Title style={style.navigatorText}>Loans</Title>
        </Body>
        <Right></Right>
      </Header>
    </>
  )
}
export { LoanNav }
