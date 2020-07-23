import axios from 'axios'
// fetch 有兼容性问题   建议使用 axios

export const baseUrl = 'http://neteasecloudmusicapi.zhaoboy.com'; // 全局的后端api前缀

const axiosInstance = axios.create({
  baseURL: baseUrl
})

export { axiosInstance }