import axios from '../../utils/axios'

export function userInfo (id, token) {
  return axios({
    url: process.env.VUE_APP_API_BASE + '/api/v1/page1/userInfo',
    method: 'post',
    params: { id }
  })
}
