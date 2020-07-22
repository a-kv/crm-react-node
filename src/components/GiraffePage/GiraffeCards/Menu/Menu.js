import React from "react";


export function Menu(props) {

    return (
        <div className='card-menu'>
            <div className='menu-item'>
                <button onClick={props.removeCard}>
                    Удалить
                </button>
            </div>
            <div className='menu-item'>
                <button onClick={props.goToEditMode}>Редактировать
                </button>
            </div>
        </div>
    );
}

