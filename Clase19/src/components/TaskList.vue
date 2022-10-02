<template>
    <h1>Lista de tareas</h1>
    <h3>{{mensaje}}</h3>
    <input type="text" v-model="task" />
    <button @click="addTask(task)">Add Task</button>
    <ul>
        <li v-for="t in tasks" :key="t.id" :class="{'check': t.check}">{{t.data}} <button
                @click="updateTask(t.id)">Hecho</button> <button @click="deleteTask(t.id)">Borrar</button></li>
    </ul>
    
    <button v-if="TasksCheckedLenght()" @click="deleteAllCheckedTasks()">Eliminar tareas Hechas</button>
    <button v-if="TasksLenght()" @click="deleteAllTasks()">Eliminar todas las tareas</button>
</template>
  
<script>

export default {
    name: 'TaskList',
    data() {
        return {
            tasks: [],
            id: 0,
        }
    },
    methods: {
        addTask(task) {
            this.tasks.push({
                id: this.id++,
                data: task,
                check: false,
            }
            )
            console.log(this.tasks)
        },
        updateTask(id) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks[i].check = !this.tasks[i].check
                }
            }

        },
        deleteTask(id) {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].id == id) {
                    this.tasks.splice(this.tasks.indexOf(i))
                }
            }
        },
        deleteAllTasks() {
            this.tasks = []
        },
        deleteAllCheckedTasks() {
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].check == true) {
                    this.tasks.splice(i, 1);
                    i=i-1;
                }
            }
        },
        TasksLenght() {
            if (this.tasks.length > 1) {
                return true
            } else { return false }
        },        
        TasksCheckedLenght() {
            let checkedTasks = 0;
            for (let i = 0; i < this.tasks.length; i++) {
                if (this.tasks[i].check == true) {
                    checkedTasks++
                }
            }
            
            if (checkedTasks > 0) {
                return true
            } else {
                return false
            }
        }
    }
}

</script>
  

<style>
.check {
    color: green;
}
</style>
  