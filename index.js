'use strict'

let React = require('react')

const setTitle = (title) => (Component) => class extends React.Component {
  componentWillMount () {
    if (typeof document !== 'undefined') {
      document.title = title
    } else {
      setTitle.title = title
    }
  }
  
  render () { 
    return React.createElement(Component, this.props)
  }
} 