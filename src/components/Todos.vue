<template>
    <div>
        <h3> hwwllo world</h3>
        <div v-bind:key="todo.id" v-for="todo in PropsTodos">
            <JKTodoItem test-cy = 'todoList' v-bind:propTodo='todo' v-on:parent-del-todo="$emit('app-del-todo', todo.id)"/>
        </div>
    </div>    
</template>
<script>
import JKTodoItem from './TodoItem.vue';

export default {
    name:'JKTodos',
    components:{
        JKTodoItem
    },
    props:["PropsTodos"]
}
</script>
<style scoped>

</style>


