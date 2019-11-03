function onBindActions({ actions, dispatch }) {
  const boundActions = Object.keys(actions).reduce((a, v) => {
    a[v] = actions[v](dispatch)
    return a
  }, {})
  return boundActions
}

export default onBindActions