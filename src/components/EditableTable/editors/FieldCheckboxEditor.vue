<template>
    <div class="input-group mb-3">
        <select v-model="inputValue" v-bind:type="editType" class="custom-select">
            <option v-for="(option, index) of variants" :key="index" :value="index">{{option}}</option>
        </select>
        <button type="button" class="btn btn-success" v-on:click="changeField">
            <img src="../../../assets/icons/check.svg" />
        </button>
    </div>
</template>

<script>
    export default {
        name: "FieldCheckboxEditor",
        props: {
            value: String,
            editType: String,
            variants: Array
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
