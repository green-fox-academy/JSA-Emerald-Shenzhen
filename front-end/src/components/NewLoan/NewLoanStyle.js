import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  NextButton: {
    flex: 1,
    alignSelf: 'flex-end',
    maxHeight: 100,
    minHeight: 70,
    backgroundColor: '#F66F43',
    width: 150,
    height: 70,
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
    bottom: 13,
    right: 5
  },
  NextButtonTitle: {
    fontSize: 25,
    color: 'white'
  }
})

export default style
