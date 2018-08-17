<template>
    <li>
        <span>{{msg.name}}：</span>
        <span>{{msg.message}}</span>
    </li>
</template>
<script>
export default {
  name: "Message",
  props: {
    msg: {
      type: Object,
      required: true
    }
  }
};
</script>
<style>
</style>


