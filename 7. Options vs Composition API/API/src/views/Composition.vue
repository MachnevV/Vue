<template>
    <div class="home">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        <h3>You have {{ todosCount }} ToDos!</h3>
        <div>
            <input v-model="newTodoName" @keyup.enter="addTodo" placeholder="Add a ToDo" type="text">
        </div>
        <div>
            <ul>
                <li v-for="(todo, index) in todos" :key="todo.id">
                    <span>{{ todo.name }}</span>
                    <button @click="deleteTodo(index)">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import { ref, computed, watch } from 'vue';

export default {
    setup() {
        let newTodoName = ref('')
        let todos = ref([
            {
                id: 1,
                name: 'One'
            },
            {
                id: 2,
                name: 'Two'
            },
            {
                id: 3,
                name: 'Three'
            }
        ])
        const swearwords = ['bad', 'very bad']


        let todosCount = computed(() => {
            return todos.value.length
        })


        function addTodo() {
            let newTodo = {
                id: Date.now(),
                name: newTodoName.value
            }
            todos.value.push(newTodo)
            newTodoName.value = ''
        }

        function deleteTodo(index) {
            todos.value.splice(index, 1)
        }

        watch(newTodoName, (newValue) => {
            // console.log('newValue: ', newValue)
            if (swearwords.includes(newValue.toLowerCase())) {
                newTodoName.value = ''
                alert('Never say ' + newValue + ' !')
            }
        })

        return {
            newTodoName,
            todos,

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