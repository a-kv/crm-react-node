import React, {useState} from 'react';

function FillBox(props) {
    const [number, setNumber] = useState(75)

    return (

        <div className='fill-box'>
            <div className='fill-box-text'>
                <span>{number} %</span>
                <span> Заполнение вольера</span>
            </div>
            <div className='fill-box-info'>
                <div className='input-back'>
                    <div> </div>
                </div>
                <button onClick={props.showInfo}>Информация</button>
            </div>
        </div>

    )
}

export default FillBox;