import { NavigationActions } from 'react-navigation'

let navigator

export function setNavigator(nav) {
  navigator = nav
}

function onNavigate(routeName, params) {
  return navigator.dispatch(NavigationActions.navigate({
    routeName,
    params
  }))
}

export default onNavigate