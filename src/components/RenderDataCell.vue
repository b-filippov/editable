<template>
    <div v-if="!isEdit">
        {{inputValue || "Не указано"}}
        <button type="button" class="btn btn-primary btn-sm cell-event-button" v-on:click="openEditor" >
            <img src="../assets/icons/edit.svg" />
        </button>
    </div>
    <div v-else>
        <field-input-editor
            v-if="editType === 'text' || editType === 'number'"
            :editType=editType
            :value=inputValue
            @change="closeEditor"
        />
    </div>
</template>

<script>
    import FieldInputEditor from "./FieldInputEditor";

    export default {
        name: "RenderDataCell",
        components: {FieldInputEditor},
        props: {
            value: [String, Number],
            cellParams: Object,
            editType: String
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
                this.$emit('change', {
                    value: data.value,
                    cellParams: this.cellParams
                });
                this.isEdit = false;
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