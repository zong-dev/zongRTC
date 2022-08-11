import React, { createContext, useEffect } from 'react'
import socketIOClient from 'socket.io-client';
import {useNavigate} from 'react-router-dom';

const WS = 'http://localhost:8020';

export const RoomContext = createContext<null | any>(null);

const ws = socketIOClient(WS);

export const RoomProvider = ({ children }: any) => {

    const navigate = useNavigate();

    console.log(ws);

    useEffect(() => {
        ws.on('room-created', enterRoom);
    });

    const enterRoom = ({ roomId }: { roomId: 'string' }) => {
        console.log(roomId);
        navigate(`/room/${roomId}`);
    };

    return (
        <RoomContext.Provider value={{ws}}>
            {children}
        </RoomContext.Provider>
    )
}