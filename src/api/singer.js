import axios from 'axios'
import queryParams from "@/api/queryParams";

export function getSinger() {
    console.log('getSinger.....')
    return axios.get('/getSinger', {
        params: queryParams
    }).then(res => res.data)
        .catch(err => err)
}
