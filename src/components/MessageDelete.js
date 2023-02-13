const selfCheck = require('../utils/selfCheck');
const { Client, Events, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');

module.exports = (msg, client, deletedMessagesWH) => {
    if(selfCheck(msg, client)) return;
    const embed = new EmbedBuilder()
	    .setAuthor({ name: `${msg.author.username}#${msg.author.discriminator}`, iconURL: msg.author.avatarURL() })
        .setDescription(`**Kanał:** ${msg.channel} \n**Wiadomość: \`${msg.content}\`**`)
	    .setColor(0xFF0000);
	deletedMessagesWH.send({
        name: 'Usunięta Wiadomość',
        embeds: [embed],
    });
}