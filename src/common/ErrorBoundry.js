import { Component } from 'react'
import PropTypes from 'prop-types'

import onFetch from './onFetch'

class ErrorBoundary extends Component {
  componentDidCatch(error) {
    return onFetch({
      body: error,
      method: 'POST',
      url: '/error'
    })
  }

  render() {
    const { children } = this.props
    return children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorBoundary