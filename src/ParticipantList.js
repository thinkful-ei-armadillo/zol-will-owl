import React from 'react';


import Participant from './participant';



function ParticipantList(props) {
    return (
        <div className="participantList">
            {props.map(participant => 
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


export default Participants;