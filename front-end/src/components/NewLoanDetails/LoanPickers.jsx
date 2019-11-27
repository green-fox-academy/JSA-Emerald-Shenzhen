import React from 'react'
import { Form, Picker, Icon } from 'native-base'
import PropTypes from 'prop-types'
import style from './NewLoanDetailsStyle'

export default function LoanPickers({ selected, setSelected, itemList }) {
  return (
    <>
      <Form style={style.picker}>
        <Picker
          textStyle={style.pickerItem}
          itemStyle={style.pickerItem}
          mode="dropdown"
          selectedValue={selected}
          onValueChange={value => setSelected(value)}
          iosIcon={<Icon name="arrow-down" />}
        >
          {itemList.map(item => {
            return <Picker.Item key={item.id} label={item.label} value={item} />
          })}
        </Picker>
      </Form>
    </>
  )
}
LoanPickers.propTypes = {
  selected: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelected: PropTypes.func.isRequired,
  itemList: PropTypes.arrayOf(PropTypes.any).isRequired
}
