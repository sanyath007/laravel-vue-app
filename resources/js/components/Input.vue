<template>
    <div class="m-b-md">
        <input
            type="text"
            placeholder="Enter Text Here"
            v-model="temMessage"
            @keyup.enter="submit"
            class="form-control"
        />
    </div>
</template>
<script>
    export default {
        name: 'Input',
        props: [

        ],
        components: {
            
        },
        data() {
            return {
                temMessage: ""
            }
        },
        methods: {
            submit: function() {
                console.log(this.temMessage)
                this.$emit("inputData", this.temMessage);
                this.temMessage = "";
            }
        }
    }
</script>
<style scoped>
    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
</style>