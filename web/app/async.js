export const responseHandling = async res => {
  if (res.status !== 200) {
    const body = await res.json()
    throw new Error(body.error).message
  }

  return res.json()
}

export const headers = {
  'Content-Type': 'application/json'
}
