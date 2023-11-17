const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const gitCommandsEmbed = new EmbedBuilder()
  .setColor(0x0099FF)
  .setTitle('Comandos do Git 🚀')
  .setDescription('Relembrar comandos do Git e suas funcionalidades.');

gitCommandsEmbed
  .addField('Comandos Básicos', [
    { name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado.' },
    { name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro.' },
    { name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados.' },
  ])
  .addField('Comandos de Status e Commit', [
    { name: '$ git status', value: 'Revise edições e crie uma transação de commit.' },
    { name: '$ git add [arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento.' },
    { name: '$ git commit -m "[mensagem]"', value: 'Grava o snapshot permanentemente do arquivo no histórico de versão.' },
  ])
  .addField('Comandos de Branch', [
    { name: '$ git branch', value: 'Lista todos os branches locais no repositório atual.' },
    { name: '$ git branch [nome-branch]', value: 'Cria uma nova branch.' },
    { name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho.' },
  ])
  .addField('Comandos de Merge e Push', [
    { name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada à branch atual.' },
    { name: '$ git push [alias] [branch]', value: 'Envia todos os commits do branch local para o GitHub.' },
    { name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças.' },
  ]);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('git')
    .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({ embeds: [gitCommandsEmbed] });
  },
};
