import React from 'react';
import './GuraffeHeader.scss';


export function GiraffeHeader(props) {

    return (<>
            <div className='header'>
            <span onClick={() => props.changeHouseFilter(props.id)}
                  className={props.filter ? 'active-item' : 'unactive-item'}>
                 {props.name}
            </span>
            </div>
        </>
    );
}


