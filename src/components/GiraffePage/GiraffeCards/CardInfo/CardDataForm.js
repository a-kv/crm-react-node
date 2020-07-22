import React from 'react';
import './CardInfo.scss';
import {Field, reduxForm} from "redux-form";
import sex from "../../../../assets/sex.png";
import weight from "../../../../assets/weight.png";
import height from "../../../../assets/height.png";
import photo from "../../../../assets/photo.jpg";
import {createField, Input} from "../../../common/forms-controls/FormsControl";


function CardDataForm( props) {

    return (
        <form className='card-data' onSubmit={props.handleSubmit}>

            <div className='card-ava'>
                <img src={props.card.image !== '' ? props.card.image : photo}/>
            </div>
            <div className='card-name'><Field component={'input'} placeholder={'Имя'} name='name'/></div>
            <div className='card-icon'>
                <div><img src={sex} alt="home"/></div>
                <div><img src={weight} alt="home"/></div>
                <div><img src={height} alt="home"/></div>
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
                <div><span>Цвет:</span><Field className='color' component={'input'} placeholder={'-'} name='color'/></div>
                <div><span>Диета: </span><Field component={'input'} placeholder={'-'} name='diet'/></div>
                {/*<div><span>Характер:</span><Field component={'input'} placeholder={'-'} name='temper'/></div>*/}
                <div><span>Характер:</span>{createField('-', 'temper', Input ,  )}</div>
            </div>
            <button>Сохранить</button>
        </form>

    );
}


const CardDataFormRedux = reduxForm({form: 'edit-card'})(CardDataForm)

export default CardDataFormRedux;