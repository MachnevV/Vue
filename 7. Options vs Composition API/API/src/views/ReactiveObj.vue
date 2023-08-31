<template>
    <div class="home">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        <h3>You have {{ todosCount }} ToDos!</h3>
        <div>
            <input 
                v-model="data.newTodoName"
                @keyup.enter="addTodo"
                placeholder="Add a ToDo"
                type="text"
            >
        </div>
        <div>
            <ul>
                <li v-for="(todo, index) in data.todos" :key="todo.id">
                    <span>{{ todo.name }}</span>
                    <button @click="deleteTodo(index)">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { reactive, computed, watch } from 'vue';

export default {
    setup() {       
        let data = reactive({
            newTodoName: '',
            todos: []
        })

        const swearwords = ['bad', 'very bad']


        let todosCount = computed(() => {
            return data.todos.length
        })


        function addTodo() {
            let newTodo = {
                id: Date.now(),
                name: data.newTodoName
            }
            data.todos.push(newTodo)
            data.newTodoName = ''
        }

        function deleteTodo(index) {
            data.todos.splice(index, 1)
        }

        watch(data, (newValue) => {
            // console.log('newValue: ', newValue)
            if (swearwords.includes(newValue.newTodoName.toLowerCase())) {
                alert('Never say ' + newValue.newTodoName + ' !')
                data.newTodoName = ''
            }
        })

        return {
            data,

            todosCount,


            addTodo,
            deleteTodo,
        }
    }
}
</script>

<style>
ul {
    list-style: none;
    padding: 0;
    width: 200px;
    margin: 20px auto 0;
}

li {
    border: 1px solid;
    display: flex;
    margin-bottom: 10px;
}

li span {
    flex-grow: 1;
}
</style>