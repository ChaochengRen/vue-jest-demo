<template>
    <div class="pool">
      <ul>
          <Message @itemClicked="handleClick" v-for="(msg, index) in msgList" :key="index" :msg="msg"></Message>
      </ul>
    </div>
</template>
<script>
import Message from "./Message";

export default {
  name: "MessagePool",
  components: { Message },
  data() {
    return {
      timer: null,
      maxVisibleLength: 10,
      data: null
    };
  },
  computed: {
    msgList() {
      let msgList = this.$store.state.msgList, len = msgList.length;
      let start = len - this.maxVisibleLength;
      return msgList.slice(start >= 0 ? start : 0, msgList.length);
    }
  },
  mounted() {
    this.start();
  },
  destroyed() {
    this.stop();
  },
  methods: {
    genMsg() {
      this.$store.dispatch('getMsgFromRemote');
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
        this.genMsg();
      }, 2000);
      console.log("Timer is ticking.");
    },
    handleClick() {
      this.timer != null ? this.stop() : this.resume();
    }
  }
};
</script>
<style>
ul {
  list-style: none;
  width: calc(100% - 24px);
  padding: 0;
  margin: 0 8px;
}
.pool {
  width: 800px;
  min-height: 580px;
  border: 1px solid #0c6188;
  border-radius: 5px;
  background: #0c6188;
}
</style>


