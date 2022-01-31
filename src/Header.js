import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar"/>
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="search clever programmer"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
