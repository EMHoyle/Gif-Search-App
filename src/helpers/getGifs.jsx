export const getGifs = async (category) => {
  const uri = 'https://api.giphy.com/v1/gifs/search?'
  const apiKey = 'api_key=d2EszDMgzgdeBrN7FV2MhGJNeViGFbTn'
  const url = `${uri}q=${encodeURI(category)}&${apiKey}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })

  return gifs
}
