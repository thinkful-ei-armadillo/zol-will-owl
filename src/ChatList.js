import React from 'react';
// import chatEvents from './Chatevents'
import ChatEvent from './Chatevent';
import './chatlist.css';

function Chatlist(props) {
        return (
            <div className="chatBox">
                <div className="chats">
                    {props.chatEvents.map((event, index) => (
                        <ChatEvent 
                            type = {event.type}
                            message = {event.message}
                            time = {event.time}
                            timestamp = {event.timestamp}
                            id = {event.participantId}
                            key = {index}
                        />
                    ))}
                </div>
                <form  id="chatForm">
					<input type="text" placeholder="Chat" />
			    </form>
            </div>
        )
} 

export default Chatlist