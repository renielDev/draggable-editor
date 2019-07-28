import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>
}

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ListItem
