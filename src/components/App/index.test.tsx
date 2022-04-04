import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './index'

test('renders text element', () => {
  render(<App />)
  const textElement = screen.getByText(/Пустой проект/i)
  expect(textElement).toBeInTheDocument()
})
