import React, {useEffect} from "react";
import {Cards} from "../GiraffeCards/Cards";
import './GiraffeHouse.scss';
import {useDispatch} from "react-redux";
import {addCard, deleteCard, getCards} from "../../../redux/reducer";
import Button from "../../common/Button";

export function GiraffeHouse(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.id) {
            dispatch(getCards(props.id))
        }
    }, [])

    function removeCard(cardId) {
        debugger
        dispatch(deleteCard(cardId, props.id))
    }

    function onAddCard(newCard) {
        dispatch(addCard(newCard, props.id))
    }

    return (
        <div className='giraffe-house'>
            <Button addItem={onAddCard} title={'Жирафы'}/>
            <Cards cards={props.cards} removeCard={removeCard}/>
        </div>
    );
}
