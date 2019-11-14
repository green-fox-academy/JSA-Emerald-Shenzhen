import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  loanButton: {
    flex: 1,
    position: 'absolute',
    width: 120,
    height: 60,
    right: 10,
    bottom: 20,
    backgroundColor: '#FF7042',
    elevation: 999999,
    zIndex: 99999,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
})

export { style }
