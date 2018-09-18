// need to come back and hide accountSid and authToken in a .env file
const accountSid = "AC2dffe8065c6916762534d160462ffd17"
const authToken = "e33faa2e8c4ea410bd119f5dee7d8b21"

const client = require("twilio")(accountSid, authToken);

client.messages.create({
    to: "8042124209",
    from: "+18043521964",
    body: "I love you ..."
})
    .then((message) => console.log(message.sid))