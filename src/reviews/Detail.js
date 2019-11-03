import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function Detail() {
  return (
    <View>
      <Text h3>
        TrackDetail
      </Text>
    </View>
  )
}

export default Detail