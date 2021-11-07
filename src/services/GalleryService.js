import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/andyzack/my-card-db',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getPhotos() {
    return apiClient.get('/photos')
  },
  getPhoto(id) {
    return apiClient.get('/photos/' + id)
  },
  getPhotoNext(id) {
    return apiClient.get('/photos/' + (id + 1))
  },
  getPhotoPrev(id) {
    return apiClient.get('/photos/' + (id - 1))
  },
}
