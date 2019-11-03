import React, { useEffect } from 'react'
import { Alert } from 'react-native'
import { useForm } from 'savignano-form'

function FormError() {
  const { submitError, errors } = useForm()
  console.log('errors are ', errors)
  useEffect(() => {
    if (submitError) {
      Alert.alert('Error', submitError, [
        { text: 'Ok', onPress: () => console.log('alert pressed') }
      ], { cancelable: false })
    }
  }, [submitError])
  return null
}

export default FormError
