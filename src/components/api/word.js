import api from './api.js'

export const word = async (word) => {
  const response = await api.get(`/${word}`)

  return response.data
}
