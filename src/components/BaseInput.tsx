import React from 'react'
import PropTypes from 'prop-types'

const BaseInput = props => {
  const { name } = props
  return <h1>Hello, There{name}</h1>
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
}

export default BaseInput
