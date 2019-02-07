import React from 'react';
import participants from './STORE';

function ChatEvent(props){
    let person = participants.find(participant => participant.id === props.id);
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
   
    const chatJSX = (
                    props.type === 'message' 
                    ? <div>
                        <img className='avatar' src={person.avatar} alt={person.name} />
                        <span>{person.name} {chatTime(props.time)}</span>
                        <p className="message">{props.message}</p>
                      </div> 
                    : <div>
                        <p><span>{person.name}</span> {textKey[props.type]}</p>
                      </div>
                      )

    return (
        <div className="chatEvent">
            {chatJSX}
        </div>
    )
}

export default ChatEvent