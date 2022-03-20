<template>
    <ul class="list-group">
			<li class="list-group-item" v-bind:class="{ 'completed' : todo.completed}" :key="index" v-for="(todo, index) in todos">{{todo.title}}
				<button class="btn btn-xs pull-right"
						v-bind:class="[todo.completed ? 'btn-danger' : 'btn-success']"
						v-on:click="toggleCompletion(todo)">
						{{todo.completed ? 'undo' : 'completed'}}
				</button>
				<button class="btn btn-warning btn-xs pull-right"
						v-on:click="deleteToDo(index)">
						Delete
				</button>
			</li>
		</ul>
</template>

<script>
export default {
    props:['todos'],
		methods:{
			deleteToDo(index){
				this.todos.splice(index,1)
			},

			toggleCompletion(todo){
				todo.completed = ! todo.completed
			}	
		}
}
</script>

<style>
    .completed {
				color: #5cb85c;
				text-decoration: line-through;
			}
</style>