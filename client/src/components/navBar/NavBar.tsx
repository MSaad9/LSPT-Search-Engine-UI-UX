import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/300x100.png';
import './NavBar.css';

interface IProps {
    page: string;
}

export function NavBar({page}: IProps) {
    return (
        <div>
            <Navbar>
                {page === "Home" ? <NavbarBrand href="/">About</NavbarBrand> : <NavbarBrand href="/"><img className="img-responsive" src={logo} alt="Logo"/></NavbarBrand>}
                <ul className="navbar-nav ml-auto">
                    <NavbarText className="pull-right"><FontAwesomeIcon icon={faCog} className="icon"/></NavbarText>
                </ul>
            </Navbar>
        </div>
    );
}