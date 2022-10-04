<template>
    <h1>Lista de tareas</h1>
    <input type="text" v-model="task" />
    <!--
    <button @click="addTask(task)">Add Task</button>
    -->
    <BtnAddTask :tasktext="task" @btnAddTask="addTask"></BtnAddTask>
    <ul>

        <li v-for="t in tasks" :key="t.id">
            <Task :task="t" :class="{'check': t.check}"></Task>
            <!-- {{t.data}} -->
            <button @click="updateTask(t.id)">Hecho</button> 
            <button @click="deleteTask(t.id)">Borrar</button>
        </li>
        
    </ul>   
    
    <button v-if="TasksCheckedLenght()" @click="deleteAllCheckedTasks()">Eliminar tareas Hechas</button>
    <button v-if="TasksLenght()" @click="deleteAllTasks()">Eliminar todas las tareas</button>
</template>
  
<script>
import BtnAddTask from './BtnAddTask.vue';
import Task from './Task.vue';

export default {
    name: "TaskList",
    data() {
        return {
            tasks: [],
            id: 0,
            task:'',
        };
    },
    methods: {
        addTask(task) {
            this.tasks.push({
                id: this.id++,
                data: task,
                check: false,
            });

        },
        updateTask(id) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks[i].check = !this.tasks[i].check;
                }
            }
        },
        deleteTask(id) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks.splice(this.tasks.indexOf(i));
                }
            }
        },
        deleteAllTasks() {
            this.tasks = [];
        },
        deleteAllCheckedTasks() {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].check == true) {
                    this.tasks.splice(i, 1);
                    i = i - 1;
                }
            }
        },
        TasksLenght() {
            if (this.tasks.length > 1) {
                return true;
            }
            else {
                return false;
            }
        },
        TasksCheckedLenght() {
            let checkedTasks = 0;
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].check == true) {
                    checkedTasks++;
                }
            }
            if (checkedTasks > 0) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    components: { BtnAddTask, Task }
}

</script>
  

<style>
.check {
    color: green;
}
</style>
  