<template>
  <div>
    <p>page1</p>
  </div>
</template>

<script>

import { userInfo } from '../../api/page1/index'
import $ from 'jquery'

export default {
  data () {
    return {}
  },
  created () {
    console.log($.fn)
    console.log(process.env.BASE_URL)
    userInfo()
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style scoped>
p {
  color: red;
  font-size: 16px; /*px*/
  height: 100px;
}
</style>
