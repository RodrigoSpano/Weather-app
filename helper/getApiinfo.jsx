import axios from 'axios'

const API_KEY = '6dd6e9922289dc23015ac78feee8b052'

const getApiinfo = async (city) => {
  const request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'buenos+aires'}&appid=${API_KEY}`)
  return request.data;
}

export default getApiinfo