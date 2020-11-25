// initialize midi
const easymidi = require("easymidi");
const inputs = easymidi.getInputs();

console.log("Waiting for MIDI devices...");

if (inputs.length === 0) {
  console.error("No MIDI devices found.");
  process.exit(1);
}

const inputName = inputs[0];
console.log(`Using MIDI device ${inputName}`);
const input = new easymidi.Input(inputName);

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9999 });

input.on("noteon", note => {
  const data = JSON.stringify(note);
  console.log(`Sending message to connected clients: ${data}`);

  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
});