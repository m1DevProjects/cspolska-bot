const selfCheck = require('../utils/selfCheck');
const { Client, Events, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');

module.exports = (msg, client, editedMessagesWH) => {
    if(selfCheck(msg, client)) return;
    const embed = new EmbedBuilder()
        .setAuthor({ name: `${msg.author.username}#${msg.author.discriminator}`, iconURL: msg.author.avatarURL() })
        .setDescription(`**Kanał:** ${msg.channel} \n**Przed edycją: \`${msg.content}\`** \n**Edytowana na: \`${msg.reactions.message.content}\`**`)
        .setColor(0xFFC0CB);
    editedMessagesWH.send({
        name: 'Edytowana Wiadomość',
        embeds: [embed],
    });
}