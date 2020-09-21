<template>
    <div v-if="!isEdit">
        {{inputValue || "Не указано"}}
        <button type="button" class="btn btn-primary btn-sm cell-event-button" v-on:click="openEditor" >
            <img src="../assets/icons/edit.svg" />
        </button>
    </div>
    <field-input-editor v-else :value=inputValue @changeField="closeEditor" />
</template>

<script>
    import FieldInputEditor from "./FieldInputEditor";

    export default {
        name: "RenderDataCell",
        components: {FieldInputEditor},
        props: {
            value: [String, Number],
            edit: Function
        },
        data() {
            return {
                inputValue: this.value,
                isEdit: false
            }
        },
        methods: {
            openEditor: function () {
                this.isEdit = true;
            },
            closeEditor: function (data) {
                console.log(data);
                this.isEdit = true;
            }
        }
    }
</script>

<style scoped>
    .cell-event-button {
        visibility: hidden;
        margin-left: 10px;
    }

    .editable-cell:hover .cell-event-button {
        visibility: visible;
    }
</style>