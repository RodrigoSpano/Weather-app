import { Flex, Heading, Stack, Text, Image } from '@chakra-ui/react'

const WeatherCard = ({state}) => {

  let image = 
  state.weather === 'Clear' ? 'clear.png' :
  state.weather === 'Clouds' ? 'clouds.png' :
  state.weather === 'Rain' ? 'rain.png' : ''


  return (
    <Stack w={{base:'xs',sm:'sm'}} minH='xs' p={5} bgColor='gray.200' borderRadius={20} alignItems='center' boxShadow='0px 0px 22px -3px rgba(0,0,0,0.8)' userSelect='none' justifyContent='center'>
        <Heading as='h2' alignSelf='center'>{state.city}, {state.country}</Heading>
        <Flex direction='row' gap={5} justifyContent='center'>
          <Text color='gray.600' fontWeight='bold' >Weather: {state.weatherDesc}</Text>
          <Text color='gray.600' fontWeight='bold' >Humidity: {state.humidity}%</Text>
        </Flex>
        <Flex direction='row'>
          <Flex direction='column' gap={2} alignItems='left' pt='5' fontFamily='Comfortaa, cursive'>
            <Text fontSize='lg' ><strong>temperature:</strong> {state.temp}°C</Text>
            <Text><strong>min temperature:</strong> {state.temp_min}°C</Text>
            <Text><strong>max temperature:</strong> {state.temp_max}°C</Text>
          </Flex>
          <Flex w={{base:'150px',sm:'200px'}} alignItems='center' justifyContent='center'>
            <Image src={`/assets/${image}`} alt={state.weather} w='100px' />
          </Flex>
        </Flex>
    </Stack>
  )
}

export default WeatherCard