<template>
    <ul>
        <Message v-for="(msg, index) in msgList" :key="index" :msg="msg"></Message>
    </ul>
</template>
<script>
import Message from "./Message";

const EVENT_UPDATE = "update";

export default {
  name: "MessagePool",
  components: { Message },
  data() {
    return {
      count: 0,
      timer: null,
      msgList: [],
      maxVisibleLength: 10
    };
  },
  mounted() {
    this.start();
  },
  destroyed() {
    this.stop();
  },
  methods: {
    genMsg() {
      let msgList = [
        "China",
        "America",
        "Cuba",
        "Japan",
        "France",
        "United Kindom",
        "Russia",
        "Belgium",
        "Brazil",
        "Netherlands"
      ];
      return msgList[Math.floor(Math.random() * 10)];
    },
    stop() {
      if (this.timer) {
        console.log("Timer is stopped.");
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    resume() {
      if (!this.timer) {
          this.start();
      }
    },
    start() {
      if (this.timer) {
        return;
      }
      this.timer = setInterval(() => {
        let list = this.msgList;
        if (list.length === this.maxVisibleLength) {
          list.splice(0, 1);
        }
        this.count++;
        this.$emit(EVENT_UPDATE, this.count);
        list.push(this.genMsg());
      }, 1000);
      console.log("Timer is ticking.");
    }
  }
};
</script>
<style>
</style>


