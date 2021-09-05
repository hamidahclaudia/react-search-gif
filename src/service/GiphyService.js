export const getGifByKeyword = async (keyword, limit) => {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${process.env.REACT_APP_API_TOKEN}&limit=${limit}`)

  const data = await res.json();

  return data.data;
}
