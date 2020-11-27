import React from 'react'
import styled from 'styled-components'

const CardContainerStyled = styled.div`
  background: #fbfbfb;
  border: 0.5px solid #dedede;
  padding: 10px;
  display: flex;
  min-height: 150px;
`

const FieldLayout = styled.div`
  flex: 1;
  position: relative;
  padding: 10px;
`
const FieldLayoutTitle = styled(FieldLayout)`
  max-width: 300px;
  margin-right: 10px;
  background: #989898;

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background: #dedede;
    right: -10px;
    top: 0;
  }
`

const FieldContentStyled = styled.span`
  float: right;
`

const InputStyled = styled.input`
  display: block;
  border-radius: 2px;
  box-shadow: none;
  border: none;
`

const InputLabelStyled = styled(InputStyled)`
  border: 0;
  background: none;

  &:focus {
    border: 1px solid #9c9a9a;
    background: #f1f1f1;
    outline: none;
  }
`

export default () => (
  <CardContainerStyled>
    <FieldLayoutTitle>
      <FieldContentStyled>
        <InputStyled />
      </FieldContentStyled>
    </FieldLayoutTitle>

    <FieldLayout>
      <InputLabelStyled placeholder="Sample text" />
    </FieldLayout>
  </CardContainerStyled>
)
