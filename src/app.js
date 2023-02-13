require('dotenv').config();
const config = require('./config');
const selfCheck = require('./utils/selfCheck');
const MessageUpdate = require('./components/MessageUpdate');
const MessageDelete = require('./components/MessageDelete');

const { Client, Events, GatewayIntentBits, WebhookClient, EmbedBuilder } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const deletedMessagesWH = new WebhookClient({ url: config.channels.deletedMessagesLog });
const editedMessagesWH = new WebhookClient({ url: config.channels.editedMessagesLog });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, msg => {
	if(selfCheck(msg, client)) return;
	//msg.reply(`New message! ${msg.author} said: ${msg.content}`);
});

client.on(Events.MessageUpdate, msg => MessageUpdate(msg, client, editedMessagesWH));
client.on(Events.MessageDelete, msg => MessageDelete(msg, client, deletedMessagesWH));

client.login(process.env.TOKEN);

module.exports = client;