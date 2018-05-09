<template>
  <div>
    count is {{$store.state.count}}
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    created(){
      console.log(this.$store.state.count)
    },
    computed:mapGetters([
      //与vuex中的getters关联
    ]),
    methods:mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
