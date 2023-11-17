const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('git')
    .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({
      content: 'Comandos do Git 🚀',
      embeds: [
        {
          color: 'BLURPLE',
          title: 'Comandos do Git 🚀',
          description: 'Relembrar comandos do Git e suas funcionalidades.',
          fields: [
            {
              name: 'Comandos Básicos',
              value: '```git init [nome-do-projeto]``` - Cria um novo repositório local com um nome especificado.',
            },
            {
              name: 'Comandos de Status e Commit',
              value: '```git status``` - Revise edições e crie uma transação de commit.',
            },
            {
              name: 'Comandos de Branch',
              value: '```git branch``` - Lista todos os branches locais no repositório atual.',
            },
            {
              name: 'Comandos de Merge e Push',
              value: '```git merge [nome-branch]``` - Combina o histórico da branch especificada à branch atual.',
            },
          ],
        },
      ],
    });
  },
};
