<template>
    <div v-if="!isEdit">
        {{getValue(this.value, editType)}}
        <button type="button" class="btn btn-primary btn-sm cell-event-button" v-on:click="openEditor" >
            <img src="../../assets/icons/edit.svg" />
        </button>
    </div>
    <div v-else>
        <field-input-editor
            v-if="editType === 'text' || editType === 'number'"
            :editType=editType
            :value=this.value
            @change="closeEditor"
        />
        <field-select-editor
            v-if="editType === 'select'"
            :editType=editType
            :value=this.value
            :variants=selectVariants
            @change="closeEditor"
        />
        <field-checkbox-editor
            v-if="editType === 'checkbox'"
            :editType=editType
            :value=this.value
            :variants=selectVariants
            @change="closeEditor"
        />
    </div>
</template>

<script>
    import FieldInputEditor from "./editors/FieldInputEditor";
    import FieldSelectEditor from "./editors/FieldSelectEditor";
    import FieldCheckboxEditor from "./editors/FieldCheckboxEditor";

    export default {
        name: "RenderDataCell",
        components: {
            FieldInputEditor,
            FieldSelectEditor,
            FieldCheckboxEditor
        },
        props: {
            value: [String, Number],
            editType: String,
            selectVariants: Array
        },
        data() {
            return {
                isEdit: false
            }
        },
        methods: {
            getValue: function(value, editType) {
                if(!value) return "Не указано";
                if (editType === "select" || editType === "checkbox") {
                    const currentVariant = this.selectVariants.find(item => item.value === value);
                    return currentVariant.title;
                }
                return value;
            },
            openEditor: function () {
                this.isEdit = true;
            },
            closeEditor: function (data) {
                this.$emit('change', {
                    value: data.value
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