module.exports = (msg, client) => {
    if(msg.author === client.user) return true;
    if(`${msg.author.username}#${msg.author.discriminator}` === 'Usunięta wiadomość#0000') return true;
    if(`${msg.author.username}#${msg.author.discriminator}` === 'Edytowana Wiadomość#0000') return true;
    return false;
}