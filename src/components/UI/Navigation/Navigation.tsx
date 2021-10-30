import * as React from "react";
import { FC } from "react";
import { NavLink } from 'react-router-dom';

import * as classes from './Navigation.module.scss';

export const Navigation: FC = () => (
    <nav className={classes.Navigation}>
        <ul>
            <li>
                <a href='https://rickandmortyapi.com/' target="_blank" rel="noreferrer">
                    <img src='/logo.png' alt="logo" />
                </a>
            </li>
            <li>
                <NavLink to='/About' exact 
                    activeClassName={classes.active}>
                    About
                </NavLink>
            </li>            
            <li>
                <NavLink to='/' exact 
                    activeClassName={classes.active}>
                    <span className="fa fa-home"></span>
                </NavLink>
            </li>
        </ul>
    </nav>
);