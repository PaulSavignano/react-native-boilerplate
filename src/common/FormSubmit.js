import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import { useFormSubmit } from 'savignano-form'

function FormSubmit({
  children,
  onPress,
  style,
}) {
  const {
    onSubmit,
    isDisabled,
  } = useFormSubmit()
  return (
    <Button
      disabled={isDisabled}
      onPress={() => onSubmit(onPress)}
      style={style}
      title={children}
    />
  )
}

FormSubmit.defaultProps = {
  style: undefined
}

FormSubmit.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
}

export default FormSubmit