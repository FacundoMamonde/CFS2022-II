<template>
    <button @click="addTask()">Add Task</button>
</template>
  
<script>

export default {
    name: 'BtnAddTask',
    props: {
        tasktext:String,
    },
    data() {
    }, 
    methods:{
        addTask(){
            this.$emit("btnAddTask",this.tasktext)
        }
    }
}

</script>
  
<style>

</style>