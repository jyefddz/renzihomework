<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.done }" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delFn(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['list'])
  },
  methods: {
    ...mapActions(['things/asyncDelThings']),
    delFn(id) {
      this.$store.dispatch('things/asyncDelThings', id)
    }
  }
}
</script>
