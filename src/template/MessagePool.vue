<template>
    <ul>
        <message :for="msg in msgList" :msg="msg"></message>
    </ul>
</template>
<script>
import Message from "./Message";

export default {
    name: 'MessagePool',
    components: { Message },
    data() {
        return {
            timer: null,
            msgList: [],
            maxVisibleLength: 10
        }
    },
    mounted() {
        let timer = this.timer;
        if (timer) {
            return;
        }
        timer = setInterval(() => {
            let list = this.msgList;
            if (list.length === this.maxVisibleLength) {
                list.splice(0, 1, this.genMsg());
            } else {
                list.push(this.genMsg());
            }
        })
    },
    destroyed() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    },
    methods: {
        genMsg() {
            let msgList = [
                'China',
                'America',
                'Cuba',
                'Japan',
                'France',
                'United Kindom',
                'Russia',
                'Belgium',
                'Brazil',
                'Netherlands'
            ];
            return msgList[Math.random() * 10];
        }
    }
};
</script>
<style>
</style>


