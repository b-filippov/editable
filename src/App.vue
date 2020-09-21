<template>
  <div class="container-fluid" id="app">
    <EditableTable
      v-bind:tableBodyData=tableBodyData
      v-bind:tableHeaderData=tableHeaderData
    />
  </div>
</template>

<script>
  import {dbStudents} from "./assets/db_temp/db_students";
  import EditableTable from './components/EditableTable'

  export default {
    name: 'App',
    components: {
      EditableTable
    },
    data() {
      return {
        tableHeaderData: dbStudents.columns,
        tableBodyData: dbStudents.list
      }
    }
  }
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
