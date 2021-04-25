<template>
   <h2>关于</h2>
  
</template>

<script lang="ts">
import {Options,Vue} from 'vue-class-component'


@Options({

})
export default class About extends Vue {
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