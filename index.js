// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		IntentsBitField.Flags.GuildMembers
	] 
});

const WelcomeChannelID = "1067639935441588256";
const StupefyerRoleID = "1067822870249623643";

client.on('guildMemberAdd', member => {
	console.log(`${member.user.tag} has joined the server`);
	member.roles.add(StupefyerRoleID);
	client.channels.cache.get(WelcomeChannelID).send(`Welcome to the server, ${member}!`);
});

client.on('error', console.error);

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);