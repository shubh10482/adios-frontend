import axios from 'axios';

var baseURL = 'http://localhost:8080/'

export default axios.create({
  baseURL
});