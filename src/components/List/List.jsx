import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const List = ({ children, ...rest }) => {
  return <ul {...rest}>{children}</ul>
}

List.propTypes = {
  children: PropTypes.node.isRequired,
}

List.Item = ListItem

export default List
