const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Ruby")
        .setDescription("Veja a documentação Ruby"),

    async execute(interaction) {
        await interaction.reply("https://ruby-doc.org/");
    }
}
