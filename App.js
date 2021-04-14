import React from 'react'

import Router from './src/router'
import { ThemeProvider } from 'styled-components'

import theme from './src/utils/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}
