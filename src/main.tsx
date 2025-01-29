import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './store/theme.ts'
import { Provider as JotaiProvider } from 'jotai'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JotaiProvider>
      <ChakraProvider
        theme={theme}
      >
        <App />
      </ChakraProvider>
    </JotaiProvider>
  </React.StrictMode>,
)
