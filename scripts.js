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
		methods: {
			removePlayer: function(player) {
				this.players.splice(this.players.indexOf(player), 1);
			},
			addPlayer: function() {
				this.players.push({name: 'Joe', life: 20, gems: 0});
			},
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