import axios from 'axios';

const instance = axios.create({
  baseURL: "https://norma-76317-default-rtdb.firebaseio.com/",
});
export default instance;
