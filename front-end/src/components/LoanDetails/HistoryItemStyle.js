import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 5
  },
  circle: {
    height: 45,
    width: 45,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
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
  },
  date: {
    fontSize: 15,
    color: 'grey'
  }
})

export default style
