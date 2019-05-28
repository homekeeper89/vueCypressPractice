<template>
    <div class='todo-item' v-bind:class="{'is-complete':propTodo.completed}">
        <p>
            <input type='checkbox' v-on:change="markComplete">
            {{propTodo.title}}
            <button @click="$emit('parent-del-todo', propTodo.id)" class="del">X</button>
        </p>
    </div>
</template>
<script>
export default{
    name:"JKTodoItem",
    props:['propTodo'],
    methods:{
        markComplete(){
            this.propTodo.completed = ! this.propTodo.completed
        }
    }
}
</script>
<style scoped>
.todo-item{
    background: #f4f4f4;
    padding:10px;
    border-bottom: 1px #ccc dotted;
}
.is-complete{
    text-decoration: line-through;
}
.del{
    background: #ff0000;
    color: #fff;
    border:none;
    padding:5px 9px;
    border-radius: 50%;
    cursor:pointer;
    float:right;
}
</style>
