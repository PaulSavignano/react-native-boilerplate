import React from 'react'
import PropTypes from 'prop-types'
import { SafeAreaView } from 'react-navigation'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function Add() {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>Review Add</Text>
    </SafeAreaView>
  )
}

Add.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default Add