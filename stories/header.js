import React from 'react'
import { storiesOf } from '@storybook/react'
import BaseInput from '../src/components/BaseInput'
import BoxContainer from '../src/components/BoxContainer'

storiesOf('Containers', module)
  .add('with text', () => <BaseInput />)
  .add('BoxContainer', () => <BoxContainer />)
