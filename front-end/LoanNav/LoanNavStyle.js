import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  
  navigator: {
    position: 'absolute',
    width: '106%',
    backgroundColor: '#2296F3',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
  navigatorText: {
    color: '#fff',
    paddingLeft: 30,
    fontSize: 20
  }
})

export { style }
