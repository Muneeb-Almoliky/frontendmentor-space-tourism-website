import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../sharedicons/logo.svg";
import { useEffect } from "react";

export default function Header({ location }) {
    const openTabIndex = window.localStorage.getItem('navOpen');
    const [openTab, setOpenTab] = useState(parseInt(openTabIndex));
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        setIsNavOpen(false);
    }, [location]);

    console.log(location.pathname);
    const links = [
        {
            to: '/',
            content: 'HOME'
        },
        {
            to: '/destination',
            content: 'DESTINATION'
        },
        {
            to: '/crew',
            content: 'CREW'
        },
        {
            to: '/technology',
            content: 'TECHNOLOGY'
        }
    ]

    // const handleTabClick = (index)=> {
    //     setOpenTab(index);
    //     window.localStorage.setItem('navOpen', index);
    // }

    // index === openTab? 'active':''
    // onClick={() => {handleTabClick(index)}}

    return (
        <>
            <header>
                
                <button className="mobile-nav-toggle" aria-expanded={isNavOpen? true:false } onClick={() => setIsNavOpen(!isNavOpen)}></button>
                <Link to="/"><img src={logo} alt="" /></Link>
                <nav>
                    <ul className="primary-navigation" data-visible={isNavOpen? true:false}>
                        {links.map((link, index) => {
                            return <li key={index} className={`${location.pathname === link.to ? 'active' : ''}`}>
                                <Link to={link.to}>{link.content}</Link>
                            </li>
                        })}
                    </ul>
                </nav>
            </header>

        </>
    )
}