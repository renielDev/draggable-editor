import React from 'react'
import { storiesOf } from '@storybook/react'
import PageLayout from '../src/components/PageLayout'

storiesOf('PageLayout', module).add('default layout', () => (
  <PageLayout
    header={() => {
      return <h1>Sample header</h1>
    }}
    content={() => {
      return <h2>sample</h2>
    }}
  />
))
