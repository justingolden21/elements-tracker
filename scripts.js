$( ()=> {
	new Vue({
		el: '#app',
		data: {
			players: [
				{name: 'Player 1', life: 20, gems: 0},
				{name: 'Player 2', life: 20, gems: 0},
				{name: 'Player 3', life: 20, gems: 0},
			],
		},
		methods: {
			removePlayer: function(player) {
				let idx = this.players.indexOf(player);
				this.players.splice(idx, 1);
			},
			addPlayer: function() {
				this.players.push({name: 'Joe', life: 20, gems: 0});
			},
			updatePlayer: function(player, part, amount) {
				let idx = this.players.indexOf(player);
				this.players[idx][part] += amount;
			}
		},
		computed: {
			numAlive: function() {
				return this.players.filter( player => player.life > 0 ).length;
			},
		},
		filters: {
			pluralize: function(n) {
				return n === 1 ? 'player' : 'players';
			},
		},
	});
});