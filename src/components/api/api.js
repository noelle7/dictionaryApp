import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
})
