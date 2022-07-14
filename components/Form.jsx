import { Stack, chakra, Input, Button } from '@chakra-ui/react'
import {motion} from 'framer-motion'

const Form = ({ handleSubmit }) => {
  return (
    <Stack alignItems='center'>
      <chakra.form display='flex' gap={4} onSubmit={handleSubmit}>
        <Input variant='filled' placeholder='Buenos Aires...' boxShadow='0px 0px 22px -3px rgba(0,0,0,0.5)' />
        {/* <Button type='submit'>search</Button> */}
        <motion.button type='submit' className='btn-sub' whileHover={{ scale:1.1 }} whileTap={{ scale: 1.5 }} >search</motion.button>
      </chakra.form>
    </Stack>
  )
}

export default Form