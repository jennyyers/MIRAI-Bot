const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.green('$Error: ') + data);
			break;
		case "error":
			console.log(chalk.red('$Error: ') + data);
			break;
		default:
			console.log(chalk.green(`${option}  `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.green('$PSTeam: ') + data);
			break;
		case "error":
			console.log(chalk.red('$PSTeam: ') + data);
			break;
		default:
			console.log(chalk.green(`$PSTeam: `) + data);
			break;
	}
	}