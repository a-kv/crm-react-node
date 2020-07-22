import React from "react";
import {GiraffeCard} from "./GiraffeCard/GiraffeCard";
import './GiraffeCards.scss';


export function GiraffeCards(props) {


    let myFn = (c) => {
        return <GiraffeCard
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


