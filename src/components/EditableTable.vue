<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th v-for="colHeader of columns" :key="colHeader.colKey">{{colHeader.title}}</th>
                <th align="right" style="text-align: right;">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-primary" v-on:click="addItem">Добавить запись</button>
                        <button type="button" class="btn btn-success" v-on:click="save">Сохранить изменения</button>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) of rows" :key="row.id">
                <td class="editable-cell" v-for="colContent of columns" :key="colContent.colKey">
                    <render-data-cell v-bind:value=row[colContent.colKey] v-bind:edit="edit" />
                </td>
                <td align="right">
                    <div class="btn-group" role="group">
                        <button type="button" title="Переместить ниже" v-if="index !== rows.length - 1" class="btn btn-secondary" v-on:click="toDown(index)">
                            <img src="../assets/icons/arrowDown.svg" />
                        </button>
                        <button type="button" title="Переместить выше" v-if="index !== 0" class="btn btn-secondary" v-on:click="toUp(index)">
                            <img src="../assets/icons/arrowUp.svg" />
                        </button>
                        <button type="button" title="Скопировать в буфер" class="btn btn-primary" v-on:click="copyItem(index)">
                            <img src="../assets/icons/copy.svg" />
                        </button>
                        <button type="button" title="Удалить запись" class="btn btn-danger" v-on:click="remove(index)">
                            <img src="../assets/icons/remove.svg" />
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import {remove, prepend} from "ramda";
    import RenderDataCell from '../components/RenderDataCell'
    import {swapElementsInArray, copyToClipboard} from "../assets/utils/utils"

    export default {
        name: 'EditableTable',
        components: {
            RenderDataCell
        },
        props: {
            tableHeaderData: Array,
            tableBodyData: Array
        },
        data() {
            return {
                columns: this.tableHeaderData,
                rows: this.tableBodyData
            }
        },
        methods: {
            addItem: function () {
                const newItem = {};
                const currentKeys = Object.keys(this.rows[0]);
                currentKeys.forEach(itemKey => {
                    newItem[itemKey] = null;
                });
                this.rows = prepend(newItem, this.rows);
            },
            save: function () {
                console.log("send to server", this.rows);
            },
            edit: function () {
                console.log("edit");
            },
            remove: function (index) {
                this.rows = remove(index, 1, this.rows);
            },
            copyItem: function (index) {
                const currentData = this.rows[index];
                const clipData = this.columns.map(item => `${item.title}:${currentData[item.colKey]}`);
                copyToClipboard(clipData.join(";"));
            },
            toUp: function (index) {
                this.rows = swapElementsInArray(this.rows, index, index - 1);
            },
            toDown: function (index) {
                this.rows = swapElementsInArray(this.rows, index, index + 1);
            },
        }
    }
</script>

<style scoped>

</style>
