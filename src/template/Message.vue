<template>
    <li>{{msg}}</li>
</template>
<script>
export default {
    name: 'Message',
    props: {
        msg: {
            type: String,
            required: true
        }
    } 
}
</script>
<style>

</style>


