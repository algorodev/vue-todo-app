Vue.createApp({
	data() {
		return {
			todos: [],
			inputValue: '',
		}
	},
	methods: {
		addTodo() {
			this.todos.push(this.inputValue)
			this.inputValue = ''
		},
		removeTodo(index) {
			this.todos.splice(index, 1)
		},
	},
}).mount('#todo-app')
