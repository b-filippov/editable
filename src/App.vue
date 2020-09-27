<template>
  <div class="container-fluid" id="app">
    <EditableTable
      v-bind:tableBodyData=tableBodyData
      v-bind:tableHeaderData=tableHeaderData
    />
  </div>
</template>

<script>
  // import {dbStudents} from "./assets/db_temp/db_students";
  import {dbInventory} from "./assets/db_temp/db_inventory";
  import EditableTable from './components/EditableTable/index'

  export default {
    name: 'App',
    components: {
      EditableTable
    },
    data() {
      return {
        tableHeaderData: dbInventory.columns,
        tableBodyData: dbInventory.list
      }
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
