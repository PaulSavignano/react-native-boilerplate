
import { createStackNavigator } from 'react-navigation-stack'

import Signin from './Signin'
import Signup from './Signup'
import Recover from './Recover'
import Reset from './Reset'

const Navigator = createStackNavigator({
  Signin,
  Signup,
  Recover,
  Reset,
})

export default Navigator