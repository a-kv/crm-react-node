import React from 'react';
import CardDataForm from "./CardDataForm";
import './CardInfo.scss';
import sex from "../../../../assets/sex.png";
import height from "../../../../assets/height.png";
import weight from "../../../../assets/weight.png";
import photo from "../../../../assets/photo.jpg";



export function CardInfo (props) {

    return (
        <div>
            {props.editMode
                ? <CardDataForm onSubmit={props.onSubmit} card={props.card}/>
                : <CardData card={props.card}/>}
        </div>

    );
}

export function CardData (props) {
    return (
        <div className='card-data'>

            <div className='card-ava'>
                <img src={props.card.image !== '' ? props.card.image : photo}/>
            </div>
            <div className='card-name'>{props.card.name}</div>
            <div className='card-icon'>
                <div><img src={sex} alt="home"/></div>
                <div><img src={weight} alt="home"/></div>
                <div><img src={height} alt="home"/></div>
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
