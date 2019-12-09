import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  body: {
    backgroundColor: '#E3F2FD',
    height: 120,
    padding: 15
  },
  col: {
    justifyContent: 'space-between'
  },
  id: {
    fontSize: 18,
    color: '#7A7A7A'
  },
  name: {
    fontSize: 32,
    color: '#5A5C60'
  },
  remaining: {
    fontSize: 36,
    color: '#FC815E',
    alignSelf: 'flex-end'
  },
  remainingText: {
    paddingRight: 5,
    fontSize: 12,
    alignSelf: 'flex-end',
    color: '#7A7A7A'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  circle: {
    backgroundColor: 'black',
    height: 21,
    width: 21,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 8
  },
  dollar: {
    color: 'white',
    fontSize: 20
  }
})

export default style
