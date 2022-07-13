

module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Aizen",
	description: "Menu",
	usages: "[all/-a] [Page]",
	commandCategory: "system",
	cooldowns: 5
};

module.exports.handleReply = ({ api, event, handleReply }) => {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "Not a number";
	else if (num > data.length || num <= 0) msg = "Not available";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += `${command_config.commandCategory.toLowerCase()}\n`;
			msg += `\n+ Name: ${dataAfter}`;
			msg += `\n+ Description: ${command_config.description}`;
			msg += `\n+ Usages: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n+ Cooldown: ${command_config.cooldowns || 5}s`;
			msg += `\n+ Permissions: ${(command_config.hasPermssion == 0) ? "User" : (command_config.hasPermssion == 1) ? "Admin" : "Admins"}`;
			msg += `\n\n Module code by ${command_config.credits} `;
		} else {
			check = true;
			let count = 0;
			msg += `${dataAfter.group.toLowerCase()}\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1} ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n+ Reply message by number to view command details";
		}
	}

	return api.sendMessage(msg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	const command = commands.values();
	//*tiêu đề cmd
	var group = [], msg = "\n";
	//*
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 100);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Not a number";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 100) - 100 : 0;
			bonus = index_start;
			index_end = (index_start + 100 > all_commands.length) ? all_commands.length : index_start + 100;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n【﻿Ｒｅｐｌｙ　ｍｅｓｓａｇｅ　ｂｙ　ｎｕｍｂｅｒ　ｔｏ　ｖｉｅｗ　ｃｏｍｍａｎｄ　ｄｅｔａｉｌｓ】`;
			msg += "\n";
		}
		return api.sendMessage(msg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 100);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Not a number";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 100) - 100 : 0;
		bonus = index_start;
		index_end = (index_start + 100 > group.length) ? group.length : index_start + 100;
		console.log(page_num_input)
		console.log(index_start)
		console.log(index_end)
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. ${commandGroup.group.toLowerCase()}`);
		msg += `\n\n»Page(${page_num_input || 1}/${page_num_total})`;
		msg += `\n»To view details of other pages, use: ${prefix}menu [number of pages]`;
		msg += `\n»Reply to messages by number to view commands by category`;
	}
	return api.sendMessage(msg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
          }