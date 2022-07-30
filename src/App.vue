<template>
  <div>
    <button @click="checkColor">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},
  computed: {
    ...mapGetters(['colorList'])
  },

  methods: {
    ...mapActions(['color/asyncCheckColor']),
    checkColor() {
      this.$store.dispatch('color/asyncCheckColor')
    }
  }
}
</script>

<style scoped></style>
