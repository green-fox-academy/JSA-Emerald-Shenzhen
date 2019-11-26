import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  button: {
    backgroundColor: '#F66F43',
    width: 110,
    height: 60,
    borderRadius: 35,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginRight: 10,
    position: 'absolute',
    bottom: 10,
    right: 5
  },
  buttonTitle: {
    left: -5,
    fontSize: 20,
    color: 'white'
  },
  buttonIcon: {
    fontSize: 25,
    left: 0
  }
})

export default style
