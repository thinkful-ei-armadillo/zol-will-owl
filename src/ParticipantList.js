import React from 'react';
import Participant from './Participant';
import participants from './STORE';


function ParticipantList(props) {
    return (
        <div className="participantList">
            {participants.map(participant => 
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