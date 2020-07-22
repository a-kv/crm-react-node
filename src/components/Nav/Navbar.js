import React from 'react';
import './NavBar.scss';
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-giraffe.jpg';
import home from "../../assets/home.png";
import set from "../../assets/sett.png";
import staff from "../../assets/staff.png";
import control from "../../assets/control.png";
import help from "../../assets/help.png";
import giraffe from "../../assets/giraffe.png";


export function Navbar() {

    return (
        <div className='navbar'>
            <div className='navbarContainer'>
                <div className='nav-header'>
                    <img src={logo} alt="logo"/>
                    <div className='nav-title'>
                        <span>Ферма Заслуженных Жирафов</span>
                        <span>России и СНГ</span>
                    </div>
                </div>

                <div className='navItem'>
                    <NavLink to="/main" className='text' activeClassName='active-link'><img src={home} alt="home"/>Главная</NavLink>
                </div>
                <div className='navItem'>
                    <NavLink to="/control" className='text'><img src={control} alt="home"/>Управление</NavLink>
                </div>
                <div className='navItem'>
                    <NavLink to="/giraffe" className='text' activeClassName='active-link'> <img src={giraffe} alt="home"/> Жирафы</NavLink>
                </div>
                <div className='navItem'>
                    <NavLink to="/staff" className='text'> <img src={staff} alt="home"/>Сотрудники</NavLink>
                </div>
                <div className='navItem'>
                    <NavLink to="/settings" className='text'><img src={set} alt="home"/>Настройки</NavLink>
                </div>
                <div className='navItem'>
                    <NavLink to="/help" className='text'> <img src={help} alt="home"/> Поддержка</NavLink>
                </div>
            </div>
        </div>
    );
}


