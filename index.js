const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

//dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env
console.log("TOKEN:", process.env.TOKEN);

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname,"commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection()

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    }else {
        console.log(`Esse comando em ${filePath} está com "data ou "execute" ausentes`)

    }
}

// Login do bot
client.once(Events.ClientReady, c => {
	console.log(`Pronto! Login realizado como ${c.user.tag}`);
});
client.login(TOKEN);

// Listener de interações com o bot
client.on(Events.InteractionCreate, async (interaction) => {
    console.log("Interaction received", interaction);
    
    if (interaction.isStringSelectMenu()) {
      const selected = interaction.values[0];
      switch (selected) {
        case "javaScript":
          await interaction.reply("Documentação do JavaScript: https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript");
          break;
        case "python":
          await interaction.reply("Documentação do Python: https://docs.python.org/pt-br/3/tutorial/index.html");
          break;
        case "csharp":
          await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/");
          break;
        case "Java":
          await interaction.reply("Documentação do Java: https://docs.oracle.com/en/java/");
          break;
        case "PHP":
          await interaction.reply("Documentação do PHP: https://www.php.net/docs.php");
          break;
        case "Ruby":
          await interaction.reply("Documentação do Ruby: https://ruby-doc.org/");
          break;
        case "TypeScript":
          await interaction.reply("Documentação do TypeScript: https://www.typescriptlang.org/docs/");
          break;
        case "html-css":
          await interaction.reply("Documentação do HTML/CSS: https://developer.mozilla.org/en-US/docs/Web/HTML | https://developer.mozilla.org/en-US/docs/Web/CSS");
          break;
        // Adicione outros casos conforme necessário para as novas linguagens
        default:
          await interaction.reply("Opção não reconhecida");
      }
    }
  
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) {
      console.error("Comando não encontrado");
      return;
    }
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply("Houve um erro ao executar o comando.");
    }
  });
  