import axios from 'axios'
import queryParams from './config'

export function getSlider() {
    const result = axios.get('/getBanner',{
        params: queryParams
    }).then(result => result.data)
        .catch(error => error)

    return result      //这里返回的是一个 状态为 resolve 的 Promise 对象
}
