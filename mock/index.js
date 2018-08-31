import Mock from 'mockjs'

import page1 from './page1'

// 登录相关
Mock.mock(/\/api\/v1\/page1\/userInfo/, 'post', page1.userInfo)

export default Mock
