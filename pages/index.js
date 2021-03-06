import { Heading, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

import Form from '../components/Form'
import WeatherCard from '../components/WeatherCard'
import getApiinfo from '../helper/getApiinfo'
import Social from '../components/Social'

export default function Home() {

  const [data, setData] = useState({
    city:'',
    humidity:'',
    temp:'',
    temp_max:'',
    temp_min:'',
    weather:'',
    weatherDesc:'',
  })

  const [city, setCity] = useState('')

  useEffect( () => {
    getApiinfo(city)
    .then( res => {
      setData( {
        ...data,
        city:res.name,
        humidity:res.main.humidity,
        temp:Math.floor(res.main.temp - 273),
        temp_max:Math.floor(res.main.temp_max - 273),
        temp_min:Math.floor(res.main.temp_min - 273),
        weather:res.weather[0].main,
        weatherDesc:res.weather[0].description,
      } )
    })
  }, [city] )

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(e.target[0].value)
    e.target.reset()
  }

  return (
    <Stack h='100vh' bgColor='blue.400'>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack alignItems='center' justifyContent='center' pt={40}>
        <motion.div animate={{ scale: 1.5}} transition={{ duration: 1 }} >
          <Heading userSelect='none' fontFamily='josefin Sans, sans-serif' fontSize={{base:'4xl',md:'6xl'}} color='gray.200' alignSelf='center' >Weather App</Heading>
        </motion.div>
        
        <Stack alignItems='center' p={10} gap={10}>
          <Form handleSubmit={handleSubmit} />
          <WeatherCard state={data} />
        </Stack>
      </Stack>

      <Social />

    </Stack>
  )
}
