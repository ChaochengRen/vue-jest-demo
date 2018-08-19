<template>
    <li @click="handleClick">
      <div class="block msg-font round-border border-shadow">
        <span>{{msg.name}}：</span>
        <span>{{msg.message}}</span>
      </div>
    </li>
</template>
<script>
const EVENT_ITEM_CLICKED = 'itemClicked';

export default {
  name: "Message",
  props: {
    msg: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit(EVENT_ITEM_CLICKED);
    }
  }
};
</script>
<style scoped>
li {
  cursor: pointer;
}
.block {
  width: 100%;
  min-height: 40px;
  background-color: #f4f8fb;
  margin: 8px 0px;
  padding: 3px;
}
.round-border {
  border: 1px solid #f4f8fb;
  border-radius: 6px;
}
.border-shadow {
  box-shadow:2px 2px 4px #1d262c
}
.msg-font {
  color: #45799d;
  font-family: Arial, Helvetica, sans-serif, "Microsoft Yahei", "微软雅黑"
}
</style>


