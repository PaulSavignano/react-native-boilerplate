import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Form as FormBase } from 'savignano-form'
import { Text } from 'react-native-elements'

import FormError from '../common/FormError'
import FormSubmit from '../common/FormSubmit'

const styles = StyleSheet.create({
  form: {
    padding: 8,
    margin: 'auto',
  },
  text: {
    margin: 8
  }
})

function Form({
  children,
  name,
  onSubmit,
  onValidate,
}) {
  return (
    <>
      <Text h3 style={styles.text}>{name}</Text>
      <FormBase component={View} onValidate={onValidate}>
        <FormError />
        {children}
        <FormSubmit onPress={onSubmit}>
          {name}
        </FormSubmit>
      </FormBase>
    </>
  )
}

Form.defaultProps = {
  onValidate: undefined,
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onValidate: PropTypes.func,
}

export default Form