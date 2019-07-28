import React from 'react'
import { storiesOf } from '@storybook/react'
import { List } from '../src/components/index'

storiesOf('List', module).add('with text', () => (
  <List>
    <List.Item>Sample</List.Item>
    <List.Item>Sample</List.Item>
    <List.Item>Sample</List.Item>
  </List>
))
