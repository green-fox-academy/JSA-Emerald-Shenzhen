import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  loanHome: {
    paddingHorizontal: 10,
    paddingTop: 75
  },
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
  },
  header: {
    fontSize: 24,
    color: '#444444',
    marginVertical: 15
  }
})

export { style }
