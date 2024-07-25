// import React from "react";
import './Card.css'

import {Box, Text, Image} from '@chakra-ui/react'

const Card = ({img,titulo,descripcion}) => {

    return(

        <Box>
            <Image w='104px' h='105px' src={img} alt=""/>
            <Box as='h2' color='#343434' mt='2px' mb='14px'>{titulo}</Box>
            <Text w="142px" color='#7d7d7d' textAlign='center' fontFamily='"Roboto", sans-serif' fontWeight='400' fontStyle='normal' lineHeight='1.2' textIndent='15px'>{descripcion}</Text>
        </Box>

    )
}

export default Card