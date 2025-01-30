import axios from 'axios'
const axiosInstance= axios.create()
const VITE_BACKEND_URL= 'http://localhost:8000'
axiosInstance.defaults.baseURL=
VITE_BACKEND_URL
axiosInstance.defaults.withCredentials=true;
export default axiosInstance