export const getGifByKeyword = async (keyword, limit) => {
  const res = await fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=e2Ud7Rflq9j5Jnq58CWWRVfmf1Z5thCx&limit=${limit}`)

  const data = await res.json();

  return data.data;
}
