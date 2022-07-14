import { Link, Stack, Text } from '@chakra-ui/react'
import {motion} from 'framer-motion'

const SocialCard = (props) => {



  return (
    <motion.div animate={{ x: -100 }} whileHover={{ x: 0 }} transition={{ duration : 0.5 }} >
      <Link href={props.link} isExternal>
        <Stack bgColor={props.color} w='150px' h='50px' direction='row' alignItems='center' justifyContent='end' pr='2' position='absolute' left='0' >

          <Text fontSize='xl' textTransform='uppercase'>{props.name}</Text>
          {props.icon}

        </Stack>
      </Link>
    </motion.div>
  )
}

export default SocialCard