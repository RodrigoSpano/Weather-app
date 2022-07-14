import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Stack w='100vw' h='50px' bgColor='gray.800' justifyContent='center'>
      <Heading fontFamily='josefin Sans, sans-serif' color='gray.200' alignSelf='center' >Weather App</Heading>
    </Stack>
  )
}

export default Navbar