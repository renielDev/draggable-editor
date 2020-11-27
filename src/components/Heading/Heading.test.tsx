import React from 'react'
import { render } from '@testing-library/react'
import Header from './Heading'

describe('<Header />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Header />)
      expect(container).toMatchSnapshot()
    })
  })
})
