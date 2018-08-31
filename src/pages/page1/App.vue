<template>
  <div>
    <p>page1</p>
  </div>
</template>

<script>

import { userInfo } from '../../api/page1/index'

export default {
  data () {
    return {}
  },
  created () {
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
