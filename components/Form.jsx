import { Stack, chakra, Input, Button } from '@chakra-ui/react'
import React from 'react'

const Form = ({ handleSubmit }) => {
  return (
    <Stack alignItems='center'>
      <chakra.form display='flex' gap={4} onSubmit={handleSubmit}>
        <Input variant='filled' placeholder='Buenos Aires...' />
        <Button type='submit'>search</Button>
      </chakra.form>
    </Stack>
  )
}

export default Form