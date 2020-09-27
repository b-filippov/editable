<template>
    <div class="input-group mb-3">
        <input v-model="inputValue" v-bind:type="editType" class="form-control">
        <button type="button" class="btn btn-success" v-on:click="changeField">
            <img src="../../../assets/icons/check.svg" />
        </button>
    </div>
</template>

<script>
    export default {
        name: "FieldInputEditor",
        props: {
            value: [String, Number],
            editType: String
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
