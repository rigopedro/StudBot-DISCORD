const { REST, Routes } = require("discord.js")

//dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

// importação dos comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname,"commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles) {
    const command = require (`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const javaCommand = require("./commands/Java");
commands.push(javaCommand.data.toJSON());

const rubyCommand = require("./commands/Ruby");
commands.push(rubyCommand.data.toJSON());

const typescriptCommand = require("./commands/TypeScript");
commands.push(typescriptCommand.data.toJSON());

const phpCommand = require("./commands/PHP");
commands.push(phpCommand.data.toJSON());

const htmlCssCommand = require("./commands/html-css");
commands.push(htmlCssCommand.data.toJSON());

const botinfoCommand = require("./commands/botinfo");
commands.push(botinfoCommand.data.toJSON());

// instância REST
const rest = new REST({version: "10"}).setToken(TOKEN);

// deploy
(async () => {
    try {
        console.log(`Resentando ${commands.length} comandos...`)

        // PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
    }
    catch (error){
        console.error(error)
    }


})()
