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

<style scoped lang="less">
p {
  color: red;
}
</style>
