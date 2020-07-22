import React, {useState} from 'react';
import './GiraffeCard.scss';
import {Menu} from "../Menu/Menu";
import {CardInfo} from "../CardInfo/CardInfo";
import {saveCard} from "../../../../redux/reducer";


export function GiraffeCard(props) {
    const [isHidden, setIsHidden] = useState(true)
    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        debugger
        saveCard(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    const handleClick = () => {
        setIsHidden(!isHidden);
    }
    return (
        <div className='giraffe-card'>
            <div className='card-item'>
                <div className='card-menu'>

                    {!isHidden
                        ? <div className='menu-title' onClick={handleClick}>menu
                            <div className='is-hidden'>
                                <Menu
                                    id={props.id}
                                    cardId={props.card.id}
                                    removeCard={props.removeCard}
                                    goToEditMode={() => {
                                        setEditMode(true)
                                    }}/></div>
                        </div>
                        : <div className='menu-title' onClick={handleClick}>menu</div>}

                </div>
                <div className='card-info'>
                <CardInfo editMode={editMode} onSubmit={onSubmit} card={props.card}/>
                </div>
            </div>
        </div>
    );
}


