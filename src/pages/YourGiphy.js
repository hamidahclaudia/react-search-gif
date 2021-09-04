import SearchBar from "../components/SearchBar"
import GifList from "../components/GifList"
import { useState } from 'react'
import { getGifByKeyword } from '../service/GiphyService'
import PulseLoader
  from "react-spinners/PulseLoader";

const YourGiphy = () => {
  const _LIMIT = 9;
  const [gifList, setGifList] = useState([])
  const [loading, setLoading] = useState(false)

  const onEnter = (e) => {
    getGif(e);
  }

  const getGif = async (keyword) => {
    setLoading(true)
    const data = await getGifByKeyword(keyword, _LIMIT)
    setGifList(data)
    setLoading(false)
  }

  return (
    <div className='is-centered'>
      <h1>SEARCH YOUR GIPHY</h1>
      <SearchBar onEnter={onEnter} />
      {
        loading ?
          <div style={{ margin: '10em' }}>
            <PulseLoader 
              color='lightgray' 
              loading={loading} 
              size={20} />
          </div>
          : <GifList gifList={gifList} />
      }
    </div>
  )
}

export default YourGiphy
