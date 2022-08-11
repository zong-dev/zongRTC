import { useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { RoomContext } from '../context/MyContext';
export const Room = () => {
    const { id } = useParams();

    const { ws } = useContext(RoomContext);
    useEffect(() => {
        ws.emit('join-room', {id});
    })
    return <>{id}</>;
}