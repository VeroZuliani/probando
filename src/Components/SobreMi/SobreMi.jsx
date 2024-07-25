// import React from "react";
import Card from '../Card/Card'
import './SobreMi.css'
import { element } from 'prop-types'
import {Box, Text, Flex} from '@chakra-ui/react'


const SobreMi = () => {

    let sobreMI = [
        {
            "img":"/diseñar.svg",
            "titulo":"Diseñar",
            "descripcion":"Planificar, probar, mantener y documentar software."
        },
        {
            "img":"/desarrollar.svg",
            "titulo":"Desarrollar",
            "descripcion":"Brindar soluciones para satisfacer necesidades del cliente."
        },
        {
            "img":"/soporte.svg",
            "titulo":"Soporte",
            "descripcion":"Brindar soporte informático."
        },
    ]

    return(

        <Box className="sobreMi" color='#FCFCFC' textAlign='center'>

    
            {/* <Heading as='h1' size='4xl' noOfLines={1} pt='60px' color='#343434'>Sobre Mi</Heading> */}

            {/* <Box as='h1' pt='60px' color='#343434'>Sobre Mi</Box> */}
            {/* <Text class="presentacion">Soy una programadora apasionada por el desarrollo web y de aplicaciones  utilizando las últimas tecnologías y mejores prácticas de desarrollo para desempeñarme como Full Stack. <br> Mi objetivo es participar en proyectos versátiles que me desafíen y permitan expandir mis habilidades.</Text> */}
    
            <Flex className="sobreMi-contenedor" justifyContent='space-evenly' alignItems='flex-start' pr='86px' pl='86px' mb='100px'>
                {sobreMI.map(elemento => 
                    <Card img={elemento.img} titulo={elemento.titulo} descripcion={elemento.descripcion}/>)
                }
            </Flex>

        </Box>
    
    )
}

export default SobreMi