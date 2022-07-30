<template>
  <div>
    <div>
      <p class="explain_title">按钮类型</p>
      <Button type="normal">普通按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button type="error">警告按钮</Button>
      <Button type="success">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </div>
    <div>
      <p class="explain_title">朴素按钮</p>
      <Button plain type="normal">普通按钮</Button>
      <Button plain type="default">默认按钮</Button>
      <Button plain type="error">警告按钮</Button>
      <Button plain type="success">主要按钮</Button>
      <Button plain type="warning">警告按钮</Button>
    </div>
    <div>
      <p class="explain_title">圆角按钮</p>
      <Button circle plain type="normal">普通按钮</Button>
      <Button circle plain type="default">默认按钮</Button>
      <Button circle type="error">警告按钮</Button>
      <Button circle type="success">主要按钮</Button>
      <Button circle plain type="warning">警告按钮</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/button'
export default {
  data() {
    return {}
  },
  components: {
    Button
  },

  created() {},

  methods: {}
}
</script>

<style scoped></style>
