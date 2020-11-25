import * as vscode from 'vscode';
import * as WebSocket from 'ws';

export function activate(_: vscode.ExtensionContext) {
	const socket = new WebSocket('ws://localhost:9999');
	socket.on('message', data => {
		const midi = JSON.parse(data.toString());
		console.log(midi);

		if (midi.note === 50) {
			vscode.commands.executeCommand('editor.action.deleteLines');
		} else if (midi.note === 48) {
			vscode.commands.executeCommand('editor.action.commentLine');
		} else if (midi.note === 44) {
			vscode.commands.executeCommand('undo');
		} else if (midi.note === 45) {
			vscode.commands.executeCommand('redo');
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }
