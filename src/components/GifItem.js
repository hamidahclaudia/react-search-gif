const GifItem = ({ gif }) => {
  return (
    <div
      className='gif-box'
      style={{ backgroundImage: `url(${gif.images.preview_webp.url})` }}>
    </div>
  )
}

export default GifItem
