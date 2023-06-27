const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
         .setName("playlist")
        .setDescription("Playlist para estudar programação!"),

    async execute(interaction) {
      await interaction.reply("https://open.spotify.com/playlist/10M75TUt3X1qbBhpuEw6el?si=5a88bc14c73e4873")
    }
}