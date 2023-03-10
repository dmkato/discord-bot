import { Client, GatewayIntentBits } from "discord.js"

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
  
})

client.login(process.env.DISCORD_AUTH_TOKEN)