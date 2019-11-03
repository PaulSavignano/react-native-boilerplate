import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { useFormField } from 'savignano-form'
import { Input } from 'react-native-elements'

const styles = StyleSheet.create({
  input: {
    marginVertical: 4,
    marginHorizontal: 8
  }
})

function FormField({
  autoCapitalize,
  autoCorrect,
  label,
  name,
  onValidate,
  placeholder,
  secureTextEntry,
  type,
}) {
  const {
    error,
    isTouched,
    onChange,
    onBlur,
    value,
  } = useFormField({
    name,
    type,
    onValidate
  })
  return (
    <View style={styles.input}>
      <Input
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        errorMessage={isTouched && error ? error : ' '}
        label={value ? label : ' '}
        name={name}
        onBlur={() => onBlur({ name, value })}
        onChangeText={v => onChange({ name, value: v })}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        type={type}
        value={value}
      />
    </View>
  )
}

export default FormField