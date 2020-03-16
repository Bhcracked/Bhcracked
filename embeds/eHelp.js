module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("Rolex Level System")
    .setDescription("List of commands for Rolex Level System.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**:?leaderboard**
**:?rank**
**:?rank** \`\`@User\`\`
**:?help**
**:?help** \`\`COMMAND\`\`
**:?invite**
**:?rlevel** \`\`add/remove rolename\`\`
**:?bug** \`\`bug information\`\`
**:?blacklist** \`\`add/remove rolename\`\`` ,true)
    .setFooter("© Rolex Network", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}