import React from 'react';
import participants from './STORE';

function ChatEvent(props){
    const person = participants.find(participant => participant.id === props.key);
    const textKey = {
        'thumbs-up': 'gave a thumbs up',
        'thumbs-down': 'gave a thumbs down',
        'raise-hand': 'raised hand',
        'clap': 'clapped',
        'join': 'joined',
        'leave': 'left',
        'join-stage': 'joined stage',
        'leave-stage': 'left stage'
    }

    function chatTime(time){
        var date = new Date(parseInt(time));
        var options = {hour: "numeric", minute: "numeric"};
        return new Intl.DateTimeFormat("en-US", options).format(date);
      } 
   
    const chatJSX = props.type === 'message' 
                    ? <div className="message">
                        <img className='avatar' src={person.avatar} alt={person.name} />
                        <span>{person.name}</span>
                        <span>{chatTime(props.time)}</span>
                      </div> 
                    : <div>
                        <span>{person.name}</span>
                        <span>{textKey[props.type]}</span>
                      </div>

    return (
        <div className="chatEvent">
            {chatJSX}
        </div>
    )
}

export default ChatEvent