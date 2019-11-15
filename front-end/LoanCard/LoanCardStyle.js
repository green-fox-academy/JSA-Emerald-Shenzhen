import { StyleSheet } from 'react-native'
const style = StyleSheet.create({
  loanCard: {
    flex: 1,
    zIndex: -1,
    height: 250,
    width: '100%',
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderColor: '#000',
    borderStyle: 'solid',
    elevation: 5,
    marginBottom: 20
  },
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
  payNowButtonText: {
    color: '#000',
    margin: 0,
    paddingLeft: 20
  },
  payNowButtonImg: {
    position: "absolute",
    left: -10
  }
})

export { style }
