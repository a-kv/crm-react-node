import React from 'react';

function Button(props) {
    return (

        <div className='cards-header'>
            {props.title}
            <button className='add-btn' onClick={props.addItem}>
                +</button>
        </div>

    )
}

export default Button;