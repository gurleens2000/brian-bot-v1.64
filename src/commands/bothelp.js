'use-strict';

const Command = require('../../lib/commands/command.js');

class BotHelp extends Command {
  constructor(client) {
    let options = {
      name: "bothelp",
      description: "See the bot's commands.",
      format: "bls.bothelp"
    };
    super(client, options);
  }

  async run(message)
  {
    let client = this.client;

    let helpMessage = '*Help*\n';

    Array.from(client.commands.values()).forEach(command => {
      helpMessage += `\t*${command.name}* - _${command.description}_\n\t\t*Format* - ${command.format}\n`;
    });

    client.say(message, helpMessage);
  }
}
module.exports = BotHelp;