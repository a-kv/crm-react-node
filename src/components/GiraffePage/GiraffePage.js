import React, {useEffect, useState} from 'react';
import './GiraffePage.scss';
import {GiraffeHeader} from "./Header/GiraffeHeader";
import {useDispatch, useSelector} from "react-redux";
import {addNewHouse, changeHouseFilter, setHouses} from "../../redux/reducer";
import {GiraffeHouse} from "./House/GiraffeHouse";
import bell from "../../assets/bell.jpg";
import logo from "../../assets/logo-giraffe.jpg";
import Button from "../common/Button";
import FillBox from "./FillBox/FillBox";
import setting from "../../assets/setting.jpg";
import {Menu} from "./GiraffeCards/Menu/Menu";
import UpdateHistory from "./UpdateHistory/UpdateHistory";


export function GiraffePage(props) {

    const [isHidden, setIsHidden] = useState(false)
    const houses = useSelector(state => state.houses.houses)
    const dispatch = useDispatch();

    useEffect(() => {
        if (houses) {
            dispatch(setHouses())
        }
    }, [])

    function changeHouseFil(houseId) {
        dispatch(changeHouseFilter(props.id))
    }

    function addHouse() {
        dispatch(addNewHouse())
    }

    function showInfo() {
        setIsHidden(false)
    }
    function closeInfo() {
        setIsHidden(true)
    }

    return (
        <div className='giraffe-page'>
            <div className='page-header'>
                <div className="header-items">
                    {
                        houses.map(h => {
                            return <GiraffeHeader changeHouseFilter={changeHouseFil} key={h.id} name={h.name} id={h.id}
                                                  filter={h.filter}/>
                        })}
                    <Button addItem={addHouse}/>
                </div>
                <div className='header-auth'>
                    <div><img src={bell} alt="bell"/></div>
                    <div className='logo'><img src={logo} alt="logo"/></div>
                    <div>hello@giraffe.com</div>
                </div>
            </div>

            <div className='page-container'>
                {houses.map(h => {
                    if (h.filter) {
                        return <GiraffeHouse key={h.id} id={h.id} cards={h.cards}/>
                    }
                })}
            </div>
            <div className='update-history'>
                {!isHidden
                ? <UpdateHistory closeInfo={closeInfo}/>
                : ''}
            </div>
            <div className='footer-page'>
                <FillBox cards={houses.cards} showInfo={showInfo}/>
            </div>
        </div>
    );
}


