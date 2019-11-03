import React, { useContext } from 'react'
import { View } from 'react-native'

import Context from './Context'
import Form from './Form'
import FormField from '../common/FormField'
import NavLink from '../common/NavLink'
import { validateEmail, validateRequired } from '../common/validators'

function Signin() {
  const { onSignin } = useContext(Context)
  return (
    <View>
      <Form name="Sign In" onSubmit={onSignin}>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          name="email"
          onValidate={validateEmail}
          placeholder="Email"
          type="text"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          name="password"
          onValidate={validateRequired}
          placeholder="Password"
          secureTextEntry
          type="text"
        />
      </Form>
      <NavLink route="Signup">
        New?  Sign up instead.
      </NavLink>
      <NavLink route="Recover">
        Forgot password?  Recover.
      </NavLink>
    </View>
  )
}

export default Signin