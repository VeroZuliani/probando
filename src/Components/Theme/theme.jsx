//Definimos los estilos de capa
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    // global:{
    //     body:{
    //         margin:0,
    //         padding:0,
    //     }
    // },
    colors: {
      bg: {
        black: '#111111',
        white: '#FCFCFC',
      },
      color: {
        color: '#fdc800',
        txtTitulo: '#343434',
        txtSubtitulo: '#7d7d7d',
        formLabel: '#404040',
        oscuro: '#a08208',
      },
    },
    font:{
      family:{
        cactus: '"Cactus Classical Serif", serif',
        french: '"IM Fell French Canon", serif',
        roboto: '"Roboto", sans-serif',
      },
      fontWeight:{
        400: '400',
        500: '500',
        700: '700',
      },
      fontStyle:{
        normal: 'normal',
      },
    },
  })

  export default theme