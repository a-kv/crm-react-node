import React from "react";
import {Card} from "./Card/Card";
import './Cards.scss';

export function Cards(props) {

    let myFn = (c) => {
        return <Card
            key={c.id}
            id={c.id}
            card={c}
            removeCard={props.removeCard}
        />
    }
    let elements = props.cards.map(myFn);

    return (
        <div className='giraffe-cards'>
                {elements}
        </div>
    );
}


