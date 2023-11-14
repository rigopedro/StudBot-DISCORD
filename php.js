const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("php")
        .setDescription("Veja a documentação PHP"),

    async execute(interaction) {
        await interaction.reply("https://www.php.net/docs.php");
    }
}
