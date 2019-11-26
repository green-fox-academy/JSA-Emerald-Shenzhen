import { StyleSheet } from 'react-native'
import { Platform } from '@unimodules/core'

const style = StyleSheet.create({
  content: {
    padding: 10,
    height: '100%'
  },
  upDetailsView: {
    padding: 10
  },
  picker: {
    borderBottomColor: '#E8EAF6',
    borderBottomWidth: 1
  },
  pickerItem: {
    fontSize: 30
  },
  downTipView: {
    backgroundColor: '#E8EAF6',
    paddingHorizontal: 35,
    paddingVertical: Platform.OS === 'android' ? 20 : 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  amountFont: {
    fontSize: 48
  },
  selectionTitle: {
    fontSize: 14,
    marginTop: 20
  },
  exclamationText: { fontWeight: '200', color: '#7C7D83', marginLeft: 20 },
  transactionFont: { fontSize: 20, marginTop: 25 }
})
export default style
