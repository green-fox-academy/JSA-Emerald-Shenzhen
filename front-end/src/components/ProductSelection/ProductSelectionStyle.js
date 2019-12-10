import { StyleSheet } from 'react-native'

const common = {
  context: {
    display: 'flex',
    flexDirection: 'row',
    width: '75%'
  },
  title: {
    fontWeight: 'bold'
  },
  icon: {
    fontSize: 40,
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  card: {
    padding: '5%',
    paddingLeft: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#D4D4D4'
  },
  select: {
    marginTop: 0
  },
  button: {
    alignSelf: 'flex-end'
  },
  buttonView: {
    marginTop: '5%'
  }
}

const tinyStyle = StyleSheet.create({
  ...common,
  show: {
    display: 'none'
  }
})

const extendStyle = StyleSheet.create({
  ...common,
  show: {
    display: 'flex'
  }
})

export { tinyStyle, extendStyle }
