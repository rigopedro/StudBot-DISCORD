const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Java")
        .setDescription("Veja a documentação Java"),

    async execute(interaction) {
        await interaction.reply("https://docs.oracle.com/en/java/");
    }
}
