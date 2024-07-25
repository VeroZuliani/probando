// import React from "react";
import './Footer.css'

import {Box, Divider, Text, Flex} from '@chakra-ui/react'

const Footer = () => {
    return(
 
        <Box className="autor" bg='bg.black' color='color.oscuro' pt='5px' pb='2px'>

            <Divider orientation='horizontal' color='color.oscuro' border='1px solid #a08208'/>
            <Flex className="nom" 
                justifyContent='space-between' 
                pr='20px' 
                pl='20px' 
                fontFamily='family.roboto' 
                fontWeight='400' 
                fontStyle='normal' 
                fontSize={14}> 
                <Text color='color.oscuro'>&copy; Verónica Zuliani 2024</Text>
                <Text color='color.oscuro'>Todos los derechos reservados.</Text>
            </Flex> 

        </Box>    

    )
}

export default Footer