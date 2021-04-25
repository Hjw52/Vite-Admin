<template>
  <h2>工作台</h2>
  
</template>

<script lang="ts">
import {Options,Vue} from 'vue-class-component'


@Options({

})
export default class Work extends Vue {
  msg="hahahaha"
  get Msg2(){
    return this.msg+"2======="
  }
  
}

</script>

<style scoped>
.txt{
  color: red;
}
</style>