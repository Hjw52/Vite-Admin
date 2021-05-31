<template>
<div>
 <router-view/>
</div>

</template>

<script lang="ts">
import {Options,Vue} from 'vue-class-component'


@Options({

})
export default class Dashboard extends Vue {
 
  
}

</script>

<style scoped>
.txt{
  color: red;
}
</style>