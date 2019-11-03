import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import { withNavigation } from 'react-navigation'

function NavButton({
  children,
  navigation,
  route,
  style,
  isDisabled,
}) {
  return (
    <Button
      style={style}
      disabled={isDisabled}
      onPress={() => navigation.navigate(route)}
      title={children}
    />
  )
}

NavButton.defaultProps = {
  isDisabled: false,
  style: {},
}

NavButton.propTypes = {
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  navigation: PropTypes.instanceOf(Object).isRequired,
  route: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
}

export default withNavigation(NavButton)