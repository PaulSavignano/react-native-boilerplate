import React, { useContext } from 'react'
import { View } from 'react-native'

import Context from './Context'
import Form from './Form'
import FormField from '../common/FormField'
import NavLink from '../common/NavLink'
import { validateRequired, validatePasswords } from '../common/validators'

function Signup() {
  const { onSignup } = useContext(Context)
  return (
    <View>
      <Form
        name="Sign Up"
        onSubmit={onSignup}
        onValidate={validatePasswords}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          name="email"
          onValidate={validateRequired}
          placeholder="Email"
          type="text"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          name="password"
          placeholder="Password"
          onValidate={validateRequired}
          secureTextEntry
          type="text"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Password Confirm"
          name="passwordConfirm"
          placeholder="Password Confirm"
          onValidate={validateRequired}
          secureTextEntry
          type="text"
        />
      </Form>
      <NavLink route="Signin">
        Already have an account?  Sign in instead.
      </NavLink>
      <NavLink route="Recover">
        Forgot password?  Recover.
      </NavLink>
    </View>
  )
}

export default Signup