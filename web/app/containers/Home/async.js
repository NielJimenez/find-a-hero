import qs from 'query-string'
import { responseHandling } from 'App/async'

const API_URL = process.env.API_URL

export const eventList = async args => {
  const res = await fetch(
    `${API_URL}/events/list.json`,
    {
      method: 'GET'
    }
  )

  return responseHandling(res)
}

