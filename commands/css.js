const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("HTML-CSS")
        .setDescription("Veja a documentação HTML/CSS"),

    async execute(interaction) {
        await interaction.reply("https://developer.mozilla.org/en-US/docs/Web/HTML | https://developer.mozilla.org/en-US/docs/Web/CSS");
    }
}
