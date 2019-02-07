import React from 'react';


function Participant(props) {

    const status = props.onStage ? 'on stage' : 'in session';

    return (
        <div className='participant' key={props.id}>
            <img className='avatar' src={props.avatar} alt={props.name} />
            <div className="participantInfo">
                <span className='name'>{props.name}</span>
                <div className = {props.inSession ? "green" : "gray"}></div>  
                <span className='status'>{status}</span>           
            </div>        
        </div>
    )
}

export default Participant;