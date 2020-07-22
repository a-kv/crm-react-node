import React, {useState} from 'react';
import './Card.scss';
import {Menu} from "../Menu/Menu";
import {CardInfo} from "../CardInfo/CardInfo";
import {saveCard} from "../../../../redux/reducer";
import setting from '../../../../assets/setting.jpg';
import {useDispatch} from "react-redux";


export function Card(props) {
    const [isHidden, setIsHidden] = useState(true)
    let [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        debugger
        dispatch(saveCard(formData, props.card.id))
            .then(
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
                        ? <div className='menu-title' onClick={handleClick}><img src={setting} alt="set"/>
                            <div className='is-hidden'>
                                <Menu
                                    removeCard={() => {
                                        props.removeCard(props.card.id)
                                    }}
                                    goToEditMode={() => {
                                        setEditMode(true)
                                    }}/></div>
                        </div>
                        : <div className='menu-title' onClick={handleClick}><img src={setting} alt="set"/></div>}

                </div>
                <div className='card-info'>
                <CardInfo editMode={editMode} onSubmit={onSubmit} card={props.card}/>
                </div>
            </div>
        </div>
    );
}


