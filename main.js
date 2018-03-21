var game = new Phaser.Game(400, 500);

var mainState = {
	preload: function(){
		game.load.image('inna' , 'inna.png');
		//wrzucanie plików z obrazkami i audio
	},

	create: function(){
		game.stage.backgroundColor = '#c1e2ff' ;
		game.physics.startSystem(Phaser.Physics.ARCADE); 

		this.inna = game.add.sprite(100, 400, 'inna');

		game.physics.arcade.enable(this.inna); //grawitacja

		this.inna.body.gravity.y = 1000;

	



		//ustawianie na miejscu obiektów, które mają się pojawić po starcie gry
	},

	upload: function(){
		//co ma się zmieniać w czasie
	},
}; 

game.state.add('main' , mainState);
game.state.start('main');