import axios from 'axios'

const defaultHeaders = {
  	'Content-Type': 'application/json',
}

const API = axios.create({
	headers: defaultHeaders,
	baseURL: 'http://localhost:8000'
})

export default API;