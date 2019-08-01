import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import keysTemplate from './keys_.json'

const KeyboardStyled = styled.div`
  background: #f1f0f0;
  box-sizing: border-box;
  border: 1px solid #f3f3f3;
  border-radius: 10px;
  box-shadow: 0 5px 0 #d4d4d4;
  display: grid;
  width: fit-content;
  padding: 5px;
  grid-template-columns: repeat(87, 10px);
  grid-template-rows: repeat(6, 60px);
  transform: perspective(600px) rotateX(45deg) scale(0.7);
`

const KeyHole = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  margin: 5px;
  grid-column: auto / span ${props => props.span || 6};

  ${props =>
    props.subKey
      ? `
    display: grid;

  `
      : ``}

  & .key-hole {
    margin: 0 !important;

    & > div {
      padding: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:first-child > div {
      box-shadow: inset 0px -3px 0px #e2e1e1;
    }
  }
`

const KeyStyled = styled.div`
  background-color: #fbfbfb;
  padding: 10px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 3px 0px #dedede;
  color: #9c9c9c;
  font-size: 12px;

  &:hover {
    background-color: #f5f2f2;
  }
`

const Key = ({ child, span }) => {
  let subKey = null
  let childKey = <KeyStyled>{child}</KeyStyled>
  if (Array.isArray(child)) {
    subKey = child

    childKey = (
      <React.Fragment>
        {child.map(label => (
          <KeyHole span={3} className="key-hole">
            <KeyStyled>{label}</KeyStyled>
          </KeyHole>
        ))}
      </React.Fragment>
    )
  }

  console.log(subKey)

  return (
    <KeyHole span={span} subKey={subKey}>
      {childKey}
    </KeyHole>
  )
}

Key.propTypes = {
  child: PropTypes.node.isRequired,
  span: PropTypes.number,
}

Key.defaultProps = {
  span: 0,
}

const Keyboard = ({ render }) => {
  return <KeyboardStyled>{render()}</KeyboardStyled>
}

Keyboard.propTypes = {
  render: PropTypes.func.isRequired,
}

const Keys = () => {
  const { primary, sizes } = keysTemplate

  const keys = primary.reduce((nodes, currentColumn, columnIndex) => {
    const rowKeys = currentColumn.map((value, rowIndex) => {
      return <Key child={value} span={sizes[columnIndex][rowIndex]} />
    })
    return [...nodes, ...rowKeys]
  }, [])

  return <React.Fragment>{keys}</React.Fragment>
}

const withKeys = WrappedComponent => {
  return () => {
    return <WrappedComponent render={Keys} />
  }
}

const KeyboardWithKeys = withKeys(Keyboard)

export default () => {
  return <KeyboardWithKeys />
}
