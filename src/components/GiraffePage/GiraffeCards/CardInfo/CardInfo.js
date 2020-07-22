import React from 'react';
import './GiraffeCard.scss';


export function GiraffeInfo (props) {

    return (
        <div className='card-info'>

                <div className='card-ava'>
                    {props.card.image}
                </div>
                <div className='card-name'>{props.card.name}</div>
                <div className='card-icon'>
                    <div>{props.card.sex}</div>
                    <div>{props.card.weight}</div>
                    <div>{props.card.height}</div>
                </div>
                <div className='card-param'>
                    <div>{props.card.sex}
                    </div>
                    <div>{props.card.weight}</div>
                    <div>{props.card.height}</div>
                </div>

                <div className='card-param-sec'>
                    <div><span>Цвет:</span>{props.card.color}</div>
                    <div><span>Диета: </span>{props.card.diet}</div>
                    <div><span>Характр:</span>{props.card.temper}</div>
                </div>
            </div>

    );
}


