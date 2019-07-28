import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from '../src/components'

storiesOf('Heading', module)
  .add('Heading 1', () => <Heading />)
  .add('Heading 2', () => <Heading tag="h2" />)
  .add('Heading 3', () => <Heading tag="h3" />)
  .add('Heading 4', () => <Heading tag="h4" />)
  .add('Heading 5', () => <Heading tag="h5" />)
  .add('Heading 1 full width', () => <Heading fullWidth />)
