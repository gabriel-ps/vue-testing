export default {
	template: `
		<div>
			<span class="count">{{ count }}</span>
			<button @click="count++">Increment</button>
		</div>
	`,
	data() {
		return {
			count: 0
		};
	}
}