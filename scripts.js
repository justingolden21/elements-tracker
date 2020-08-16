$( ()=> {

	new Vue({
		el: '#app',
		data: {
			players: [
				{id: 0, name: 'Justin', life: 20, gems: 0},
				{id: 1, name: 'Bobby', life: 17, gems: 2},
				{id: 2, name: 'Dad', life: 12, gems: 1},
			],
			nextId: 3,
		},
		methods: {
			handleChange(id, name, life, gems) {
				console.log(id, name, life, gems);
				let pos = this.players.map( (elm)=> elm.id).indexOf(id);
				this.players[pos].name = name;
				this.players[pos].life = life;
				this.players[pos].gems = gems;
			},
		},
		components: {
			player: {
				template: `
					<div class="border shadow p-2 m-2">
						<input :value="name" type="text" class="form-control text-center" @input="oninput">
						Life:
						<input :value="life" type="number" class="form-control" @input="oninput">
						Gems:
						<input :value="gems" type="number" class="form-control" @input="oninput">
					</div>
				`,
				props:
					['id', 'name', 'life', 'gems'],
				methods: {
					oninput() {
						this.$emit('update-input', this.id, this.name, this.life, this.gems);
					},
				},
			},
		},
	});

});
