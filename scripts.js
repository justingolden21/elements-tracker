$( ()=> {

	new Vue({
		el: '#app',
		data: {
			players: [
				{name: 'Justin', life: 20, gems: 0},
				{name: 'Bobby', life: 17, gems: 2},
				{name: 'Dad', life: 12, gems: 1},
			],
		},
		components: {
			player: {
				template: `
					<div class="border p-2 m-2">
						<input v-model="name" type="text" class="form-control text-center">
						Life:
						<input v-model="life" type="number" value="20" class="form-control">
						Gems:
						<input v-model="gems" type="number" value="0" class="form-control">
					</div>
				`,
				props:
					['name', 'life', 'gems'],
			},
		},
	});

});
