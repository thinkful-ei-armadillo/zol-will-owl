import React from 'react';
import Stage from './Stage';
import './stagelist.css';


function StageList(props){
    const onStageParticipants = props.participants.filter(participant => participant.onStage);

    return (
        <div className="stageList">
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