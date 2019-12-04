import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  up: {
    backgroundColor: '#E3F2FD'
  },
  id: {
    fontSize: 18,
    marginTop: 10,
    color: '#7A7A7A'
  },
  type: {
    marginTop: 10,
    fontSize: 32,
    color: '#5A5C60'
  },
  price: {
    fontSize: 36,
    color: '#FC815E',
    alignSelf: 'flex-end'
  },
  remaining: {
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
