<template>
    <ul>
        <transition-group name="list">
            <Message v-for="(msg, index) in msgList" :key="index" :msg="msg"></Message>
        </transition-group>
    </ul>
</template>
<script>
import Message from "./Message";
import axios from "axios";

export default {
  name: "MessagePool",
  components: { Message },
  data() {
    return {
      timer: null,
      // msgList: [],
      maxVisibleLength: 10,
      data: null,
      request: axios.create({
        baseURL:
          "https://www.easy-mock.com/mock/5b765aef4d2b8f332fda9656/msgpool"
      })
    };
  },
  computed: {
    msgList() {
      return this.$store.state.msgList;
    }
  },
  mounted() {
    // this.start();
  },
  destroyed() {
    this.stop();
  },
  methods: {
    genMsg() {
      return this.request.get("/mock-msg");
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
        this.genMsg().then(resp => {
          let list = this.msgList;
          if (list.length === this.maxVisibleLength) {
            list.splice(0, 1);
          }
          list.push(resp.data);
        });
      }, 2000);
      console.log("Timer is ticking.");
    }
  }
};
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all opacity 0.5s;
}
.list-enter,
.fade-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 1s;
}
</style>


