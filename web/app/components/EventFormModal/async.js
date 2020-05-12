import qs from 'query-string'
import { responseHandling, headers } from 'App/async'

const API_URL = process.env.API_URL

export const addEvent = async args => {
  const res = await fetch(
    `${API_URL}/events.json`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(args[0])
    }
  )

  return responseHandling(res)
}

