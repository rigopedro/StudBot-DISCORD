const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js")

const row = new ActionRowBuilder()
       .addComponents(
          new StringSelectMenuBuilder()
          .setCustomId("select")
          .setPlaceholder("Nenhuma linguagem selecionada")
          .addOptions({
            label: "javascript",
            description: "Veja a documentação JavaScript",
            value: "javascript"
          },
          {
            label: "python",
            description: "Veja a documentação Python",
            value: "python"
          },
          {
            label: "C#",
            description: "Veja a documentação C#",
            value: "csharp"
          },
          {
            label: "discord.js",
            description: "Veja a documentação Discord.js",
            value: "discord.js"
          }
          
          )
       )
module.exports = {
    data: new SlashCommandBuilder()
         .setName("docs")
        .setDescription("Acesse a documentação de tech desejada!"),

    async execute(interaction) {
      await interaction.reply({content: "Selecione uma das tecnologias abaixo", components: [row]})
    }
}