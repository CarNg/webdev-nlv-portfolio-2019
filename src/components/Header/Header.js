import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
//CSS
import style from './Header.module.css';
//Images
import logo from '../../assets/images/logo.png';

function Header() {
	const mobileHeader = {
		width: "100px",
		padding: "20px",
		margin: "0 auto",
	}

  	return (
		<header>
			<MediaQuery query="(min-device-width: 768px)">
				<div className={style.headerContainer}>
					<Link to ="/"><img className={style.logo} src={logo} alt="Night Light Visuals Logo"/></Link>
					<Link to="contact" className={style.headerLink}>Contact</Link>
					<Link to="projects" className={style.headerLink}>Projects</Link>
					<Link to="about" className={style.headerLink}>About</Link>
					<Link to="/" className={style.headerLink}>Welcome</Link>
				</div>
			</MediaQuery>
			<MediaQuery query="(max-device-width: 767px)">
				<div style={mobileHeader}>
					<Link to ="/">
						<img alt="LinkedIn Icon" src={logo} width="100%" height="100%"/>
					</Link>
				</div>
			</MediaQuery>
		</header>
  );
}

export default React.memo(Header);
