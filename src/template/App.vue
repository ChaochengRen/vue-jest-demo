<template>
    <div>
        <h1 :class="msgClass">{{msg}}</h1>
        <MessagePool ref="pool" v-on:update="poolUpdate"></MessagePool>
        <button @click="togglePoolSwitch">{{operator}}</button>
    </div>
</template>
<script>
import MessagePool from './MessagePool';

export default {
    name: 'App',
    components: { MessagePool },
    data() {
        return {
            msg: 'Amount of message: 0',
            operator: '暂停'
        }
    },
    computed: {
        msgClass() {
            return {
                'font-active': this.operator === '暂停',
                'font-inactive': this.operator === '继续'
            }
        }
    },
    methods: {
        poolUpdate(info) {
            this.msg = `Amount of message: ${info}`;
        },
        togglePoolSwitch() {
            let operator = this.operator;
            let pool = this.$refs['pool'];
            operator === '暂停' ? pool.stop() : pool.resume();
            operator === '暂停' ? this.operator = '继续' : this.operator = '暂停';
        }
    }
}
</script>
<style scoped>
    .font-active {
        color: black
    }
    .font-inactive {
        color: #dddddd
    }
</style>