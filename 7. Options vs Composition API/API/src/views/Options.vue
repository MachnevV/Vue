<template>
    <div class="home">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
        <h3>You have {{ todosCount }} ToDos!</h3>
        <div>
            <input
                v-model="newTodoName"
                @keyup.enter="addTodo"
                placeholder="Add a ToDo"
                type="text"
            >
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
export default {
    data() {
        return {
            newTodoName: '',
            todos: [
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
            ],
            swearwords: ['bad', 'very bad']
        }
    },
    computed: {
        todosCount() {
            return this.todos.length
        }
    },
    methods: {
        addTodo() {
            let newTodo = {
                id: Date.now(),
                name: this.newTodoName
            }
            this.todos.push(newTodo)
            this.newTodoName = ''

        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    },
    watch: {
        newTodoName(newValue) {
            console.log('newValue: ', newValue)
            if (this.swearwords.includes(newValue.toLowerCase())) {
                this.newTodoName = ''
                alert('Never say ' + newValue + ' !')
            }
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