import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { ChakraProvider} from '@chakra-ui/react'

import Header from './Components/Header/Header'
import SobreMi from './Components/SobreMi/SobreMi'
import Footer from './Components/Footer/Footer'

import theme from './Components/Theme/theme'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <Header/>
      {/* <SobreMi/> */}
      {/* <Footer/> */}
    </ChakraProvider>

  </React.StrictMode>,
)
