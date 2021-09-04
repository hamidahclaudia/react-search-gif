import GifItem from "./GifItem" 

const GifList = ({gifList}) => {
  return (
    <div className='gif-list'>
      {
        gifList.length > 0 ? 
          gifList.map((gif, index) => {
            return <GifItem key={index} gif={gif} />
          }) 
          : 'NO GIF'}
    </div>
  )
}

export default GifList
