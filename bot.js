const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590563909904236547")
setInterval(function() {
channel.send(` https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord https://discordapp.com/ Hi I Am VENO Try Discord ITs the best and thanks try discord `);
}, 30)
})

client.login(process.env.BOT_TOKEN);