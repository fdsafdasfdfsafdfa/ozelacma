const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["792869686416506911", "792869686890463284", "794527812329406505"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "792869074836258846"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:expe0:794112665408110603>`,
'1': `<a:exp1:794112692913700864>`,
'2': `<a:exp2:794112718679703593>`,
'3': `<a:exp3:794112739777576960>`,
'4': `<a:exp4:794112772547018773>`,                       
'5': `<a:exp5:794112789038759969>`,
'6': `<a:exp6:794112812594626600>`,
'7': `<a:exp7:794112858974584842>`,
'8': `<a:exp8:794112881159176232>`,
'9': `<a:exp9:794112928643153920>`}[d];})}
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:expe0:794112665408110603>`,
'1': `<a:exp1:794112692913700864>`,
'2': `<a:exp2:794112718679703593>`,
'3': `<a:exp3:794112739777576960>`,
'4': `<a:exp4:794112772547018773>`,                       
'5': `<a:exp5:794112789038759969>`,
'6': `<a:exp6:794112812594626600>`,
'7': `<a:exp7:794112858974584842>`,
'8': `<a:exp8:794112881159176232>`,
'9': `<a:exp9:794112928643153920>`}[d];})}

var taglılar = 0;
let tag = "༮";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "792869705227960330")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:expe0:794112665408110603>`,
'1': `<a:exp1:794112692913700864>`,
'2': `<a:exp2:794112718679703593>`,
'3': `<a:exp3:794112739777576960>`,
'4': `<a:exp4:794112772547018773>`,                       
'5': `<a:exp5:794112789038759969>`,
'6': `<a:exp6:794112812594626600>`,
'7': `<a:exp7:794112858974584842>`,
'8': `<a:exp8:794112881159176232>`,
'9': `<a:exp9:794112928643153920>`}[d];})}

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:expe0:794112665408110603>`,
'1': `<a:exp1:794112692913700864>`,
'2': `<a:exp2:794112718679703593>`,
'3': `<a:exp3:794112739777576960>`,
'4': `<a:exp4:794112772547018773>`,                       
'5': `<a:exp5:794112789038759969>`,
'6': `<a:exp6:794112812594626600>`,
'7': `<a:exp7:794112858974584842>`,
'8': `<a:exp8:794112881159176232>`,
'9': `<a:exp9:794112928643153920>`}[d];})}

  
  
  
var booster = message.guild.roles.cache.get("793867268601806849").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:expe0:794112665408110603>`,
'1': `<a:exp1:794112692913700864>`,
'2': `<a:exp2:794112718679703593>`,
'3': `<a:exp3:794112739777576960>`,
'4': `<a:exp4:794112772547018773>`,                       
'5': `<a:exp5:794112789038759969>`,
'6': `<a:exp6:794112812594626600>`,
'7': `<a:exp7:794112858974584842>`,
'8': `<a:exp8:794112881159176232>`,
'9': `<a:exp9:794112928643153920>`}[d];})}

  
const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 

**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.**

**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**

**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**

**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}