const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("typescript")
        .setDescription("Veja a documentação TypeScript"),

    async execute(interaction) {
        await interaction.reply("https://www.typescriptlang.org/docs/");
    }
}           
