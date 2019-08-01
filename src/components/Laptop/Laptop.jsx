import React from 'react'
import styled from 'styled-components'

const Keyboard = styled.div`
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

const Key = styled.div`
  background-color: #fbfbfb;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #f1f1f1;
  margin: 5px;
  box-shadow: 0px 2px 3px #a7a7a7;
  grid-column: auto / span ${props => props.span || 6};

  &:hover {
    background-color: #cccccc;
    border-color: #ccc8c8;
  }
`

export default () => {
  return (
    <Keyboard>
      <Key span={9} />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />

      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key span={9} />

      <Key span={9} />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />

      <Key span={10} />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key span={11} />

      <Key span={13} />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key />
      <Key span={14} />

      <Key />
      <Key />
      <Key />
      <Key span={7} />
      <Key span={30} />
      <Key span={8} />
      <Key />
      <Key />
      <Key />
      <Key />
    </Keyboard>
  )
}
