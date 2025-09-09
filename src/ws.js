import { WebSocketServer, WebSocket } from 'ws';
import { config } from "dotenv";

config();


const server = new WebSocketServer({ port: 8080 });

server.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        server.clients?.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
});