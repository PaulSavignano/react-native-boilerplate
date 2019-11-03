import React from 'react'
import { ThemeProvider } from 'react-native-elements'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import ResolveAuth from './src/user/ResolveAuth'
import UserProvider from './src/user/Provider'
import UserNavigator from './src/user/Navigator'
import DashboardNavigator from './src/dashboard/Navigator'
import ErrorBoundary from './src/common/ErrorBoundry'
import { setNavigator } from './src/common/onNavigate'

const theme = {
  Button: {
    containerStyle: {
      margin: 8
    },
  },
  Text: {
    containerStyle: {
      margin: 8
    }
  }
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth,
  UserNavigator,
  DashboardNavigator
})

const AppContainer = createAppContainer(switchNavigator)

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <AppContainer ref={(navigator) => setNavigator(navigator)} />
        </UserProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
