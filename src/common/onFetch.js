const baseURL = 'http://e8df035d.ngrok.io'

async function onFetch({
  body,
  method = 'POST',
  url,
}) {
  const endpoint = `${baseURL}${url}`
  console.log('onFetch req', { body, method, endpoint })
  try {
    const response = await fetch(
      endpoint,
      {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        ...body && { body: JSON.stringify(body) }
      },
    )
    console.log('onFetch res ', response)
    const json = await response.json()
    console.log('onFetch res.json() ', json)
    if (!response.ok || json.errors) {
      throw json.error
    }
    return json
  } catch (error) {
    console.log('onFetch error ', error)
    return Promise.reject(error)
  }
}

export default onFetch