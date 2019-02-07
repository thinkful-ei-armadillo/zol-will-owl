import React from 'react';
import Participant from './Participant';
import './participants.css';


function ParticipantList(props) {
    return (
        <div className="participantList">
            {props.participants.map(participant => 
                <Participant 
                    key={participant.id}
                    name={participant.name}
                    avatar={participant.avatar}
                    inSession={participant.inSession}
                    onStage={participant.onStage}
                />
            )}
        </div>
        )
}


export default ParticipantList;