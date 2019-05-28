<template>
  <div id="app">
    <AddTodo v-on:add-todo='addTodo'/>
    <JKTodos v-bind:PropsTodos="Apptodos" v-on:app-del-todo='deleteTodo'/>
  </div>
</template>

<script>
import JKTodos from '../components/Todos'
import AddTodo from '../components/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    JKTodos,
    AddTodo
  },
  data(){
    return{
      Apptodos:[
        
      ]
    }
  },
  methods:{
    deleteTodo(id){
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.Apptodos=this.Apptodos.filter(Apptodos => Apptodos.id !== id))
      .catch(err => console.log(err))
    },
    addTodo(newTodo){
      const {title, completed} = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed
      })
      .then(res => this.Apptodos = [...this.Apptodos, res.data])
      .catch(err => console.log(err))
    },
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.Apptodos = res.data)
    .catch(err => console.log(err));
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border:none;
  background:#555;
  color:#fff;
  padding:7px 20px;
  cursor:pointer;
}
.btn:hover{
  background: #666;
}
</style>
