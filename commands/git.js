const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('git')
    .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({
      embeds: [
        {
          color: 0x5865F2, // Cor BLURPLE
          description: 'Relembrar comandos do Git e suas funcionalidades.',
          fields: [
            {
              name: 'Comandos Básicos',
              value: '🚀 `git init [nome-do-projeto]` - Cria um novo repositório local com um nome especificado.',
            },
            {
              name: 'Comandos de Status e Commit',
              value: 'ℹ️ `git status` - Revise edições e crie uma transação de commit.\n' +
                     '➕ `git add [arquivo]` - Faz o snapshot de um arquivo na preparação para versionamento.\n' +
                     '✅ `git commit -m "[mensagem]"` - Grava o snapshot permanentemente do arquivo no histórico de versão.',
            },
            {
              name: 'Comandos de Branch',
              value: '🌿 `git branch` - Lista todos os branches locais no repositório atual.\n' +
                     '➕ `git branch [nome-branch]` - Cria uma nova branch.\n' +
                     '🔄 `git switch -c [nome-branch]` - Muda para a branch especificada e atualiza o diretório de trabalho.',
            },
            {
              name: 'Comandos de Merge e Push',
              value: '🔀 `git merge [nome-branch]` - Combina o histórico da branch especificada à branch atual.\n' +
                     '📤 `git push [alias] [branch]` - Envia todos os commits do branch local para o GitHub.\n' +
                     '📥 `git pull` - Baixa o histórico e incorpora as mudanças.',
            },
          ],
        },
      ],
    });
  },
};
