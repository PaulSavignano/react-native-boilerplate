import React, { useContext } from 'react'
import { View } from 'react-native'

import Context from './Context'
import Form from './Form'
import FormField from '../common/FormField'
import NavLink from '../common/NavLink'
import { validateRequired } from '../common/validators'

function Recover() {
  const { onReset } = useContext(Context)
  return (
    <View>
      <Form onSubmit={onReset} name="Recover">
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          name="email"
          placeholder="Email"
          onValidate={validateRequired}
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

export default Recover