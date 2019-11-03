import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

import Context from './Context'
import actions from './actions'
import reducer from './reducers'
import onBindActions from '../common/onBindActions'

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    accessToken: null,
    isAuthenticated: false,
    refreshToken: null
  })

  const boundActions = onBindActions({ actions, dispatch })

  const value = { ...state, ...boundActions }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
Provider.propTypes = {
  children: PropTypes.element.isRequired
}

export default Provider