import React from 'react';
import Stage from './Stage';
import participants from './STORE';


function StageList(props){
    const onStageParticipants = participants.filter(participant => participant.onStage);

    return (
        <div className="stage-list">
            {onStageParticipants.map(participant => 
                <Stage 
                    key = {participant.id}
                    name = {participant.name}
                    avatar = {participant.avatar}
                />
            )}
        </div>
    )
}

export default StageList