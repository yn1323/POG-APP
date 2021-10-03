import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { theme } from '../styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['atom', 'molecule', 'organism', 'template', 'page'],
    },
  },
}
const withThemeProvider = (Story, context) => {
  return (
    <NativeBaseProvider theme={theme}>
      <Story {...context} />
    </NativeBaseProvider>
  )
}
export const decorators = [withThemeProvider]
