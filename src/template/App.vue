<template>
    <div>
        <h1>{{msg}</h1>
        <message-pool></message-pool>
    </div>
</template>

<script>
    import MessagePool from './MessagePool';
    export default {
        name: 'App',
        components: {MessagePool},
        data() {
            return {
                msg: "Hello!"
            }
        }
    }
</script>

<style scoped>

</style>