import React from 'react'
import PropTypes from 'prop-types'

const Welcome = props => {
  const { name } = props

  return <h1>Hello, {name}</h1>
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Welcome
