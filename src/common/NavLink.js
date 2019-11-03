import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    margin: 8,
  },
})

function NavLink({
  children,
  navigation,
  route,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={style}
    >
      <Text style={styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

NavLink.defaultProps = {
  style: undefined,
}

NavLink.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object)
}

export default withNavigation(NavLink)