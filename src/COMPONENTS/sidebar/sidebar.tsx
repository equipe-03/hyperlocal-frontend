import './sidebar.css'
import { useRef, useState } from 'react';
import React, { useEffect } from "react";
import './sidebar'
import { body, sidebar, toggle, searchBtn, modeSwitch, modeText } from '../../TYPES/sidebar';

 


   export const Side = () => {
 const body = useRef({}as HTMLBodyElement) 
 const sidebar = useRef({}as HTMLElement) 
 const toggle = useRef({}as HTMLElement) 
 const searchBtn = useRef({}as HTMLLIElement) 
 const modeSwitch = useRef({}as HTMLDivElement) 
 const modeText = useRef({}as HTMLElement) 
 
 function closeToggle (){sidebar.current.classList.toggle("close")}
 function changeMode (){
    body.current.classList.toggle("dark");
  
    if (body.current.classList.contains("dark")) {
      modeText.current.innerText = "Light mode";
      console.log("rodou o light")
    } else {
      modeText.current.innerText = "Dark mode";
      console.log("rodou o dark")
    }
 }

 function removeSearch (){
    sidebar.current.classList.remove("close");
 }  
   
  
   
    return (
      
    <body className='body-side' ref={body}>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
    
    <nav ref={sidebar} className="sidebar close">
        <header>
            <div className="image-text">
                <span className="image">
                    <img src="logo.png" alt=""></img>
                </span>

                <div className="text logo-text">
                    <span className="name">Menu</span>
                    <span className="profession">Administrativo</span>
                </div>
            </div>

            <i onClick={closeToggle} ref={toggle} className='bx bx-chevron-right toggle'></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

                <li onClick={removeSearch} ref={searchBtn} className="search-box">
                    <i className='bx bx-search icon'></i>
                    <input type="text" placeholder="Search..."></input>
                </li>

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">Revenue</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-bell icon'></i>
                            <span className="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">Analytics</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">Likes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Wallets</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <a href="#">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </a>
                </li>

                <li className="mode">
                    <div className="sun-moon">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                    </div>
                    <span ref={modeText} className="mode-text text">Dark mode</span>

                    <div onClick={changeMode} ref={modeSwitch} className="toggle-switch">
                        <span className="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
    

    <section className="home">
        <div className="text">Hyperlocal</div>
    </section>
    
    </body>
    
   )}
  
  export default Side;

  