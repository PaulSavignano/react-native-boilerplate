import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import ReviewList from '../reviews/List'
import ReviewDetail from '../reviews/Detail'
import UserAccount from '../user/Account'
import ReviewAdd from '../reviews/Add'

const Navigator = createBottomTabNavigator({
  reviews: createStackNavigator({
    ReviewList,
    ReviewDetail
  }),
  ReviewAdd,
  UserAccount
})

export default Navigator