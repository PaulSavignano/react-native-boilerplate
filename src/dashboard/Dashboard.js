import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import NavButton from '../common/NavButton'

const styles = StyleSheet.create({
  view: {
    padding: 8
  }
})

function Dashboard() {
  return (
    <View style={styles.view}>
      <Text h3>Dashboard</Text>
      <NavButton route="ReviewList">Go to ReviewList</NavButton>
    </View>
  )
}

export default Dashboard