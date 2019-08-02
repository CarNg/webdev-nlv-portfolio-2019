import React from 'react';
//CSS
import style from './Header.module.css';
//Images
import logo from '../../assets/images/logo.png';

function Header() {
  	return (
		<header>
			<div className={style.logo}>
				<a href="https://www.nightlightvisuals.com">
					<img
						alt="LinkedIn Icon"
						src={logo} 
						width="100%"
						height="100%"
					/>
				</a>
			</div>
		</header>
  );
}

export default Header;
