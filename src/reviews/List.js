import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import NavButton from '../common/NavButton'

function List() {
  return (
    <View>
      <Text h3>Review List</Text>
      <NavButton route="ReviewDetail">Go to ReviewDetail</NavButton>
    </View>
  )
}

export default List