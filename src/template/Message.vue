<template>
    <li>{{msg}}</li>
</template>
<script>
export default {
    name: 'Message',
    props: {
        msg: {
            type: 'string',
            required: true
        }
    } 
}
</script>
<style>

</style>


