import React from 'react';


function participant(props) {

    const status = props.onStage ? 'on stage' : 'in session';

    return (
        <div className='participant' key={props.id}>
            <img className='avatar' src={props.avatar} alt={props.name} />
            <div>
                <span className='name'>{props.name}</span>
                <span className='status'>{status}</span>
                <div {props.inSession ? className = "green" : className ="gray"}></div>             
            </div>        
        </div>
    )
}

export default participant;