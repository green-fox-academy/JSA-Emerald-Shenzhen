import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  loanCardUpPart: {
    backgroundColor: '#E3F2FD'
  },
  loanId: {
    fontSize: 18,
    marginTop: 10,
    color: '#7A7A7A'
  },
  loanType: {
    marginTop: 10,
    fontSize: 32,
    color: '#5A5C60'
  },
  loanCurrentRate: {
    fontSize: 15,
    color: '#000'
  },
  loanPrice: {
    fontSize: 36,
    color: '#FC815E',
    alignSelf: 'flex-end'
  },
  loanRemaining: {
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
