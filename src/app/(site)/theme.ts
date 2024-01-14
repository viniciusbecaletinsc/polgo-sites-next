import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'white',
        background: 'black',
      },
    },
  },
  fonts: {
    heading: 'var(--font-montserrat)',
    body: 'var(--font-montserrat)',
  },
})
