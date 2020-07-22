import React from 'react';
import './UpdateHistory.scss';
import close from '../../../assets/close.jpg';
import HistoryItem from "./HistoryItem";

function UpdateHistory(props) {
    return (

        <div className='history'>
            <div className='history-title'>
                <span>Обновления</span>
                <img onClick={props.closeInfo} src={close}/>
            </div>
            <div className='history-main'>
                <div className='header'>
                    <div>Дата</div>
                    <div>Действие</div>
                    <div>Жираф</div>
                    <div>Статус</div>
                </div>
                <div className='main'>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                </div>
            </div>
        </div>
    )
}

export default UpdateHistory;