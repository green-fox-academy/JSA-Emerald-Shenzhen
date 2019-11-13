import { StyleSheet } from 'react-native'
const style = StyleSheet.create({
  loanCard: {
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
    padding: 15,
    backgroundColor: '#E3F2FD',
    height: 180
  },
  loanCardDownPart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fFF',
    padding: 15,
    height: 60
  },
  loanId: {
    fontSize: 18,
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
  loadCardUpRemaining: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  loanPrice: {
    fontSize: 36,
    color: '#FC815E'
  },
  loanRemaining: {
    paddingRight: 5,
    fontSize: 12,
    color: '#7A7A7A'
  },
  loadCardDownPayNow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-end"
  }
})

export { style }
