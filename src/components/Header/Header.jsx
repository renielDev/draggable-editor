import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderStyled = ({ tag, children, ...rest }) => {
  const Container = styled(tag)`
    color: red;
  `

  return <Container {...rest}>{children}</Container>
}

HeaderStyled.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
}

HeaderStyled.defaultProps = {
  children: '',
  tag: 'h1',
}

const Header = props => {
  return (
    <HeaderStyled {...props}>
      <span>Sample deyms</span>
    </HeaderStyled>
  )
}

export default Header
