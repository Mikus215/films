import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Nav = () => {
    return (
        <StyledNav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            Popular Films
                        </Link>
                    </li>
                </ul>
        </StyledNav>
     );
}
 
const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    box-shadow: 0px 0px 40px #e3e3e3;
ul{
    display: flex;
    justify-content: space-between;
    max-width: 1600px;
    list-style: none;
    li{
        cursor: pointer;
        padding: .4rem;
        font-size: 1.2rem;
        margin-left: auto;
    }
}
`;


export default Nav;