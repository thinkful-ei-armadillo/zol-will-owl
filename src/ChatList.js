import React from 'react';
import chatEvents from './Chatevents'
import ChatEvent from './Chatevent';

function Chatlist(props) {
        return (
            <div className="chatBox">
                <div className="chatEvents">
                    {chatEvents.map(event => (
                        <ChatEvent 
                            key = {event.participantId}
                            type = {event.type}
                            message = {event.message}
                            time = {event.time}
                            timestamp = {event.timestamp}
                        />
                    ))}
                </div>
                <form  id="chatForm">
					<input type="text" placeholder="Chat" autofocus />
			    </form>
            </div>
        )
} 

export default Chatlist