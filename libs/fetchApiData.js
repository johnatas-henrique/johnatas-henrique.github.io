import axios from 'axios'

const fetchApiData = async (url, setApiData) => {
  const { data } = await axios.get(url).catch(e => console.error(e))
  setApiData(data)
}

export default fetchApiData
