import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { Button } from 'react-native-elements'
import Context from './Context'

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

function AccountScreen() {
  const { onSignout } = useContext(Context)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>AccountScreen</Text>
      <Button title="Sign Out" onPress={onSignout} />
    </SafeAreaView>
  )
}

AccountScreen.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired
}

export default AccountScreen