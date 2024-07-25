// import React from "react";
import './Header.css'

import { Menu,Link, Flex} from '@chakra-ui/react'

const Header = () => {
    return(

        <Flex className='header' 
              w='100%' 
              justifyContent='space-between' 
              alignItems='center' 
              position='fixed' 
              top='0' 
              zIndex={1}>

            <Link href="#hero" className="logo" 
                pt='20px' 
                pb='20px' 
                pl='43px' 
                pr='43px' 
                textDecoration='none' 
                color='#a08208' 
                fontFamily='"IM Fell French Canon", serif' 
                fontWeight='500' 
                fontStyle='normal'> 
                VERO
            </Link>
            <Menu className="menu">
                <Link href="#contacto" className="buttonContacto" 
                    color='#fdc800' 
                    p='8px' 
                    textDecoration='none' 
                    borderRadius='5px' 
                    border='1px solid #a08208' 
                    mr='27px' 
                    fontFamily='"Roboto", sans-serif' 
                    fontWeight='500' 
                    fontStyle='normal' 
                    cursor='pointer'
                    transition={{backgroundColor:'1s', color:'1s',}}
                    _hover={{
                        backgroundColor:'#FCFCFC',
                        color:'#fdc800',
                    }}>
                Contacto
                </Link>
            </Menu>

        </Flex>

    )
}

export default Header


