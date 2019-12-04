import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  up: {
    backgroundColor: '#FC7043'
  },
  down: {
    backgroundColor: '#72BB53'
  },
  icon: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default style
