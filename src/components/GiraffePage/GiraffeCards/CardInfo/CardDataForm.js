import React from 'react';
import {Field, reduxForm} from "redux-form";


function CardDataForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>

            <div className='card-ava'>
                {props.card.image}
            </div>
            <div className='card-name'><Field component={'input'} placeholder={'Имя'} name='name'/></div>
            <div className='card-icon'>
                <div>{props.card.sex}</div>
                <div>{props.card.weight}</div>
                <div>{props.card.height}</div>
            </div>
            <div className='card-param'>
                <div><Field component='select' placeholder='Пол' name='sex'>
                    <option>-</option>
                    <option value="male">М</option>
                    <option value="female">Ж</option>
                </Field>
                </div>
                <div><Field component='input' type='number' min='300' max='3000' step='50' placeholder='-' name='weight'/></div>
                <div><Field component='input' type='number' min='0' max='50' step='0.5' placeholder='-' name='height'/></div>
            </div>

            <div className='card-param-sec'>
                <div><span>Цвет:</span><Field component={'input'} placeholder={'-'} name='color'/></div>
                <div><span>Диета: </span><Field component={'input'} placeholder={'-'} name='diet'/></div>
                <div><span>Характр:</span><Field component={'input'} placeholder={'-'} name='temper'/></div>
            </div>
            <button>Сохранить</button>
        </form>

    );
}


const CardDataFormRedux = reduxForm({form: 'edit-card'})(CardDataForm)

export default CardDataFormRedux;