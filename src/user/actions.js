import { AsyncStorage } from 'react-native'

import onFetch from '../common/onFetch'
import onNavigate from '../common/onNavigate'

const onRecover = dispatch => async ({ email }) => {
  try {
    dispatch({ type: 'fetching', payload: true })
    const res = await onFetch({
      method: 'POST',
      url: '/recover',
      body: { email }
    })
    dispatch({ type: 'fetching', payload: false })
    return onNavigate('Dashboard')
  } catch (error) {
    return Promise.reject(error)
  }
}

const onReset = dispatch => async ({ password, resetToken }) => {
  try {
    dispatch({ type: 'fetching', payload: true })
    const { accessToken, refreshToken } = await onFetch({
      method: 'POST',
      url: `/reset/${resetToken}`,
      body: { password }
    })
    await AsyncStorage.setItem('token', res.token)
    dispatch({ type: 'add_token', payload: res.token })
  } catch (error) {
    return Promise.resolve(error)
  }
}

const onSignup = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'fetching' })
    const res = await onFetch({
      method: 'POST',
      url: '/signup',
      body: { email, password }
    })
    await AsyncStorage.setItem('token', res.token)
    dispatch({ type: 'add_token', payload: res.token })
    return onNavigate('Dashboard')
  } catch (error) {
    return Promise.resolve(error)
  }
}

const onSignin = dispatch => async ({ email, password }) => {
  try {
    dispatch({ type: 'fetching' })
    const { accessToken } = await onFetch({
      method: 'POST',
      url: '/signin',
      body: { email, password }
    })
    const setAccessToken = AsyncStorage.setItem('accessToken', accessToken)
    const setEmail = AsyncStorage.setItem('email', email)
    await Promise.all([setAccessToken, setEmail])
    dispatch({ type: 'add_tokens', payload: { accessToken } })
    return onNavigate('DashboardNavigator')
  } catch (error) {
    return Promise.reject(error)
  }
}

const onSigninLocal = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'add_token', payload: token })
    return onNavigate('DashboardNavigator')
  }
  return onNavigate('Signin')
}


const onSignout = dispatch => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'delete_token' })
  return onNavigate('Signin')
}

const onDeleteError = dispatch => () => dispatch({ type: 'delete_error' })

export default {
  onRecover,
  onReset,
  onSignup,
  onSignin,
  onSigninLocal,
  onSignout,
  onDeleteError,
}