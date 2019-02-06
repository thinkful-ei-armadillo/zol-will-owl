import React from 'react';

function Stage(props){
    return (
        <div className="stage" key>
            <div>
                <span className="name">{props.name}</span>
            </div>
            <img className='avatar' src={props.avatar} alt={props.name} />
        </div>
    )
}

export default Stage