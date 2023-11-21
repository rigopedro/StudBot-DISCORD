const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: {
        name: 'botinfo',
        description: 'Informações sobre o bot e como ele pode ajudar no estudo da programação.',
    },
    async execute(interaction) {
        await interaction.reply('O bot é uma ferramenta interativa para auxiliar no estudo de programação. Ele fornece informações sobre diversas linguagens e comandos úteis. Se tiver dúvidas ou quiser ver todos os comandos, use /cmd.');
    },
};