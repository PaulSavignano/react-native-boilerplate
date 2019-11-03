import React, { useContext } from 'react'
import { View } from 'react-native'

import Context from './Context'
import Form from './Form'
import FormField from '../common/FormField'
import NavLink from '../common/NavLink'
import { validatePasswords } from '../common/validators'



function Reset() {
  const { onReset } = useContext(Context)
  return (
    <View>
      <Form
        onValidate={validatePasswords}
        name="Reset"
        onSubmit={onReset}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          name="password"
          placeholder="Password"
          secureTextEntry
          type="text"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Password Confirm"
          name="passwordConfirm"
          placeholder="Password Confirm"
          secureTextEntry
          type="text"
        />
      </Form>
      <NavLink route="Signin">
        Already have an account?  Sign in instead.
      </NavLink>
      <NavLink route="Signup">
        New?  Sign up instead.
      </NavLink>
    </View>
  )
}

export default Reset