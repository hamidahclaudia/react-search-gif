import { useState, useEffect } from 'react'
import { getGifByKeyword } from '../service/GiphyService'
import GifList from "../components/GifList"
import PulseLoader
  from "react-spinners/PulseLoader";

const IronMan = () => {
  const _LIMIT = 9;
  const [gifList, setGifList] = useState([])

  useEffect(() => {
    const getGif = async () => {
      const data = await getGifByKeyword('iron man', _LIMIT)
      setGifList(data)
    }

    getGif()
  }, [])

  return (
    <div className='is-centered'>
      <h1>IRON MAN GIPHY</h1>
      {
        gifList.length === 0 ?
          <div style={{ margin: '10em' }}>
            <PulseLoader
              color='lightgray'
              loading={true}
              size={20} />
          </div>
          : <GifList gifList={gifList} />
      }
    </div>
  )
}

export default IronMan
