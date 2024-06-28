import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Navbar.css';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const mobileRef = useRef(null); // Declare useRef dentro do componente

  const showNav = () => {
    if (mobileRef.current) {
      if(openNav === false){
        mobileRef.current.style.display = "flex";
        setOpenNav(true)
      } else{
        mobileRef.current.style.display = "none";
        setOpenNav(false)
      }
    }
  };

  return (
    <div className='navbar'>
      <img src="https://jlveiculositj.com.br/img/logo2.png" alt="logo" />
      <i className="bi bi-list" onClick={showNav}></i>
      <div className='mobile-nav' ref={mobileRef}>
        <ul className='nav-mob'>
          <Link className='links' to="/"><li>HOME</li></Link>
          <Link className='links' to="/empresa"><li>EMPRESA</li></Link>
          <Link className='links' to="/estoque"><li>ESTOQUE</li></Link>
          <Link className='links' to="/cadastro"><li>CADASTRO</li></Link>
          <Link className='links' to="/contato"><li>CONTATO</li></Link>
        </ul>
      </div>
      <div className='nav-desk'>
        <ul>
          <Link className='links' to="/"><li>HOME</li></Link>
          <Link className='links' to="/empresa"><li>EMPRESA</li></Link>
          <Link className='links' to="/estoque"><li>ESTOQUE</li></Link>
          <Link className='links' to="/cadastro"><li>CADASTRO</li></Link>
          <Link className='links' to="/contato"><li>CONTATO</li></Link>
        </ul>
        <span>(47) 3075-0731</span>
      </div>
      
    </div>
  );
};

export default Navbar;
