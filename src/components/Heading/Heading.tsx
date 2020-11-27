import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const HeaderStyled = ({ tag, children, ...rest }) => {
  const Container = styled(tag)`
    color: #42413c;
    text-align: center;
    width: fit-content;
    ${props => (props.fullWidth ? 'width: 100%' : '')};
  `

  return <Container {...rest}>{children}</Container>
}

HeaderStyled.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  fullWidth: PropTypes.bool,
}

HeaderStyled.defaultProps = {
  children: '',
  tag: 'h1',
  fullWidth: false,
}

const Header = props => {
  return (
    <HeaderStyled {...props}>
      <span>Sample deyms</span>
    </HeaderStyled>
  )
}

export default Header
