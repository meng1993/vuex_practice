<template>
  <div>
    我是count，我的值是 {{$store.state.count}}
    <button @click="add">+2</button>
    <button @click="remove">-1</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:mapGetters([
      //与vuex中的getters关联
    ]),
    methods:mapActions([
      'add',
      'remove'
    ])
  }
</script>
