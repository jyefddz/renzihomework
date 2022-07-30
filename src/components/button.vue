<template>
  <button
    @click="handleClick"
    :class="[
      type ? 'ice-button--' + type : '',
      'button_init',
      {
        'is-plain': plain,
        'is-circle': circle
      }
    ]"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    plain: Boolean,
    circle: Boolean
  },
  computed: {},
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
<style scoped lang="less">
/* base */
.button_init {
  display: inline-block;
  margin: 10px;
  width: 90px;
  height: 45px;
  font-size: 12px;
  position: relative;
}
.button_init:active::after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 5%);
}
/* 普通按钮 */
.ice-button--normal {
  background: #474747;
  border: 1px solid #474747;
  color: #ffffff;
}
.ice-button--normal.is-plain {
  background: #fff;
  border: 1px solid #474747;
  color: #474747;
}
.ice-button--normal.is-plain.is-circle {
  background: #fff;
  border: 1px solid #474747;
  color: #474747;
  border-radius: 10px;
}
.ice-button--normal.is-circle {
  background: #474747;
  border: 1px solid #474747;
  color: #ffffff;
  border-radius: 10px;
}
/* 默认按钮 */
.ice-button--default {
  background: #1989fa;
  border: 1px solid #1989fa;
  color: #ffffff;
}
.ice-button--default.is-plain {
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
}
.ice-button--default.is-plain.is-circle {
  background: #fff;
  border: 1px solid #1989fa;
  color: #1989fa;
  border-radius: 10px;
}
.ice-button--default.is-circle {
  background: #1989fa;
  border: 1px solid #1989fa;
  color: #ffffff;
  border-radius: 10px;
}
/* 警告按钮 */
.ice-button--error {
  background: #eb2f06;
  border: 1px solid #eb2f06;
  color: #ffffff;
}
.ice-button--error.is-plain {
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
}
.ice-button--error.is-plain.is-circle {
  background: #fff;
  border: 1px solid #eb2f06;
  color: #eb2f06;
  border-radius: 10px;
}
.ice-button--error.is-circle {
  background: #eb2f06;
  border: 1px solid #eb2f06;
  color: #ffffff;
  border-radius: 10px;
}
/* 主要按钮 */
.ice-button--success {
  background: #2ecc71;
  border: 1px solid #2ecc71;
  color: #ffffff;
}
.ice-button--success.is-plain {
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
}
.ice-button--success.is-plain.is-circle {
  background: #fff;
  border: 1px solid #2ecc71;
  color: #2ecc71;
  border-radius: 10px;
}
.ice-button--success.is-circle {
  background: #2ecc71;
  border: 1px solid #2ecc71;
  color: #ffffff;
  border-radius: 10px;
}
/* 警告按钮 */
.ice-button--warning {
  background: #f39c12;
  border: 1px solid #f39c12;
  color: #ffffff;
}
.ice-button--warning.is-plain {
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
}
.ice-button--warning.is-plain.is-circle {
  background: #fff;
  border: 1px solid #f39c12;
  color: #f39c12;
  border-radius: 10px;
}
.ice-button--warning.is-circle {
  background: #f39c12;
  border: 1px solid #f39c12;
  color: #ffffff;
  border-radius: 10px;
}
</style>
