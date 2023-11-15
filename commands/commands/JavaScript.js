const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("JavaScript")
        .setDescription("Veja a documentação JS"),

    async execute(interaction) {
        await interaction.reply("https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript");
    }
}
