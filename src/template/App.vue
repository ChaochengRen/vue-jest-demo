<template>
    <div class="container-layout">
        <h1 :class="msgClass">{{msg}}</h1>
        <div class="toggle-btn inline right" @click="togglePoolSwitch">{{operator}}</div>
        <div class="pool-container">
            <MessagePool ref="pool"></MessagePool>
        </div>
    </div>
</template>
<script>
import MessagePool from './MessagePool';

export default {
    name: 'App',
    components: { MessagePool },
    data() {
        return {
            operator: '暂停'
        }
    },
    computed: {
        msgClass() {
            return {
                'font-active': this.operator === '暂停',
                'font-inactive': this.operator === '继续',
                'font-family': true,
                'inline': true,
                "info": true
            }
        },
        msg() {
            return 'Amount of message: ' + this.$store.getters.msgAmount;
        }
    },
    methods: {
        togglePoolSwitch() {
            let operator = this.operator;
            let pool = this.$refs['pool'];
            operator === '暂停' ? pool.stop() : pool.resume();
            operator === '暂停' ? this.operator = '继续' : this.operator = '暂停';
        }
    }
}
</script>
<style>
    body {
        background: #2d2d47
    }
    .font-active {
        color: #dddddd
    }
    .font-inactive {
        color: #6f6983
    }
    .font-family {
        font-family: Helvetica, Courier, monospace, Arial, "Microsoft Yahei", "微软雅黑";
        font-weight: lighter
    }
    .inline {
        display: inline-block;
    }
    .info {
        margin-left: calc(50% - 190px);
    }
    .right {
        float: right;
        margin-top: 10px;
        margin-right: 10px;
    }
    .pool-container {
        margin: 0 calc(50% - 400px)
    }
    .toggle-btn {
        width: 50px;
        height: 50px;
        background: #4e6b9f;
        -moz-border-radius: 25px;
        -webkit-border-radius: 25px;
        border-radius: 25px;
        line-height: 50px;
        text-align: center;
        color: white;
        cursor: pointer;
    }
    .container-layout {
        width: 100%;
        height: 100%;
    }
</style>