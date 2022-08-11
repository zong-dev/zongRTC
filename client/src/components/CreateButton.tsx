import { useContext } from "react";
import { RoomContext } from "../context/MyContext";

export const Create: React.FC = () => {
    const { ws } = useContext(RoomContext);
    const createRoom = () => {
        ws.emit('create-room');
    }
    return (
        <button onClick={createRoom} className='bg-indigo-400 py-2 px-8 rounded-lg text-md hover:bg-indigo-600 hover:text-indigo-100 text-white justify-center'>
            Start Meeting
        </button>
    );
}