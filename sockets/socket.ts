import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const desconectar = (client: Socket) =>{
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}


//escuchar mensajes
export const mensaje = (client: Socket, io:socketIO.Server) => {
    client.on('mensaje', (payload: {from: string, body: string}) => {
        console.log('Mensaje: ', payload);

        io.emit('mensaje-nuevo', payload);
    });
}