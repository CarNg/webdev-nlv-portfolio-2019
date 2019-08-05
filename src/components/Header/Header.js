import React from 'react';
import {Link} from 'react-router-dom'
//CSS
import style from './Header.module.css';
//Images
import logo from '../../assets/images/logo.png';

function Header() {
  	return (
		<header>
			<div className={style.headerContainer}>
				<Link to ="/"><img className={style.logo} src={logo} alt="Night Light Visuals Logo"/></Link>
				<Link to="contact" className={style.headerLink}>Contact</Link>
				<Link to="projects" className={style.headerLink}>Projects</Link>
				<Link to="about" className={style.headerLink}>About</Link>
				<Link to="/" className={style.headerLink}>Welcome</Link>
			</div>
		</header>
  );
}

export default Header;
