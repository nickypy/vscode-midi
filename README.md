# VSCode MIDI

Controlling VSCode using a MIDI keyboard.

## Getting Started
- VSCode (tested on 1.51.1)
- Node.js (tested on 15.2.0)
- A MIDI keyboard (tested on an Akai MPK Mini)

Running the server:
```bash
cd server
npm install
npm start
```

Running the extension:
```bash
code extension
```
Then run `F5` to run the extension itself.

## Built in keys (on the keyboard)
- `C` to toggle comment
- `D` to delete a line
- Pad 1 to undo
- Pad 2 to redo