import { Stack } from '@chakra-ui/react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import SocialCard from './SocialCard'



const Social = () => {
  return (
    <Stack gap={10}>
      <SocialCard color='blue.600' icon={<BsLinkedin size='40px' />} name='linkedin' link='https://www.linkedin.com/in/rodrigospano/' />
      <SocialCard color='gray.600' icon={<BsGithub size='40px' />} name='github' link='https://github.com/RodrigoSpano' />
    </Stack>
  )
}

export default Social