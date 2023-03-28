import './sidebar.css'
import { useRef, useState } from 'react';
import React, { useEffect } from "react";
import './sidebar'

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

                <ul className="menu-links">
                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Ingredientes</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Mesas</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Pratos</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Categorias</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Usuários</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <span className="text nav-text">Pedidos</span>
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
        <div className="text">Chef-Hub</div>
    </section>
    
    </body>
    
   )}
  
  export default Side;

  