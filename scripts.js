// util

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
function toggleFullScreen() {
	if(!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
	} else if(document.exitFullscreen) {
		document.exitFullscreen();
	}
}

// app

$( ()=> {
	new Vue({
		el: '#app',
		data: {
			players: [
				{name: 'Player 1', life: 20, gems: 0, active: false},
				{name: 'Player 2', life: 20, gems: 0, active: false},
				{name: 'Player 3', life: 20, gems: 0, active: false},
			],
			settings: {
				choosePlayers: false,
				quickButtons: true,
			},
		},
		methods: {
			removePlayer: function(player) {
				let idx = this.players.indexOf(player);
				this.players.splice(idx, 1);
			},
			addPlayer: function() {
				if(this.players.length >= 8) return;
				this.players.push({name: 'Player ' + (this.players.length+1), life: 20, gems: 0, active: false});
			},
			updatePlayer: function(player, part, amount) {
				let idx = this.players.indexOf(player);
				this.players[idx][part] += amount;

				this.players[idx].life = clamp(this.players[idx].life, 0, 20);
				this.players[idx].gems = clamp(this.players[idx].gems, 0, 20);
			},
			resetPlayers: function() {
				this.players.forEach( player => {
					player.life = 20;
					player.gems = 0;
					player.active = false;
				});
			},
			updateAll: function(part, amount) {
				this.players.forEach( player => this.updatePlayer(player, part, amount) );
			},

			activatePlayer: function(player) {
				let idx = this.players.indexOf(player);

				if(this.players[idx].active) {
					this.players[idx].active = false;
					return;
				}

				this.players.forEach( player => player.active = false );
				this.players[idx].active = true;				
			},
			randomPlayer: function() {
				this.players.forEach( player => player.active = false );
				this.players[randInt(0,this.players.length-1) ].active = true;
			},
			nextPlayer: function() {
				let activeIdx =  this.players.map( player => player.active ).indexOf(true);
				let nextIdx = (activeIdx + 1) % this.players.length;

				this.players.forEach( player => player.active = false );
				this.players[nextIdx].active = true;
			},
		},
		computed: {
			numAlive: function() {
				return this.players.filter( player => player.life > 0 ).length;
			},
		},
		filters: {
			pluralize: function(n) {
				return 'player' + (n === 1 ? '' : 's');
			},
		},
	});

	$('#toggle-footer-btn').click(function() {
		$('#footer').toggleClass('collapsed');
		$('#toggle-footer-btn i').toggleClass('fa-angle-down fa-angle-up');
	});

});
