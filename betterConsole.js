var betterConsole = (function(){
	var intros = 
		[
			"Check this shit out:",
			"YO!",
			"Fuck yeah,",
			"OH DEAR GOD IT'S",
			"It's a bird, it's a plane, it's"
		];

	consoleLog = console.log.bind(console);
	return {
		start: function() {
			console.log = function(){
				var args = [].slice.call(arguments);
				consoleLog.apply(console, [intros[~~(Math.random() * intros.length)]].concat(args))
			}
		},
		stop: function() {
			console.log = consoleLog;
		}
	}

}());
