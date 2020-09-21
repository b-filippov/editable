<template>
    <div class="input-group mb-3">
        <input v-model="inputValue" v-on:onchange="changeField" type="text" class="form-control">
        <button type="button" class="btn btn-success" >
            <img src="../assets/icons/check.svg" />
        </button>
    </div>
</template>

<script>
    export default {
        name: "FieldInputEditor",
        props: {
            value: [String, Number]
        },
        data() {
            return {
                inputValue: this.value
            }
        },
        methods: {
            changeField: function () {
                this.$emit('change', {
                    value: this.inputValue
                });
            }
        }
    }
</script>

<style scoped>

</style>