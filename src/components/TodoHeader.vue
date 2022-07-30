<template>
  <header class="header">
    <h1 :style="{ color: colorList }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      task: ''
    }
  },
  computed: {
    ...mapGetters(['colorList'])
  },
  methods: {
    ...mapActions(['things/asyncAddThings']),
    enter() {
      if (this.task.length === 0) {
        return alert('Please select a task')
      }
      this.$store.dispatch('things/asyncAddThings', this.task)
    }
  }
}
</script>
