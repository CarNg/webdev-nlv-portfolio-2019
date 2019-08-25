import React from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';
//CSS
import style from './Header.module.css';
//Images
import logo from '../../assets/images/logo.png';
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialSociety6 from '../../assets/images/socialSociety6.png';
import socialItch from '../../assets/images/socialItch.png';
import socialGithub from '../../assets/images/socialGithub.png'

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
    }

    handleClick(){
		let open = this.state.isOpen;
        this.setState({
			isOpen: !open
		});
    }

  	render(){
		const menuOpen = {height: "100%"};
		const menuClose = {height: "0%"};

		const socialRow = {
			margin: "0 auto",
            width: "80%",
            display: "table",
			tableLayout: "fixed",
			position: "absolute",
			left: "50%",
			bottom: "170px",
			transform: "translateX(-50%)"
        }
    
        const socialIcon = {
            width: "35px",
            height: "35px",
			padding: "0px 0px",
			margin: "0 auto"
        }
    
        const socialColumn = {
			display: "table-cell"
		}
		
		const email = {
			fontSize: "2.8rem",
			position: "absolute",
			left: "50%",
			bottom: "220px",
			transform: "translateX(-50%)",
			marginBottom: "10px"
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
					<div id={style.navMenu} className={style.overlay} style={this.state.isOpen ? menuOpen : menuClose}>
						<div className={style.overlaycontent}>
							<Link to="/" className={style.mobileMenuLink} style={{borderTop: "1px solid var(--nlv-cyan)"}} onClick={this.handleClick.bind(this)}>Welcome</Link>
							<Link to="/about" className={style.mobileMenuLink} onClick={this.handleClick.bind(this)}>About</Link>
							<Link to="/projects" className={style.mobileMenuLink} onClick={this.handleClick.bind(this)}>Projects</Link>

							<div style={email}>
								<a href="mailto:carmenng.media@gmail.com?Subject=Night%20Light%20Visuals" id={style.email}>
	                           		carmenng.media@gmail.com
	                        	</a>
							</div> 

							<div style={socialRow}>
								<a href="https://github.com/CarNg/" style={socialColumn}>
									<div style={socialIcon}>
										<img
											alt="Github Icon"
											src={socialGithub} 
											width="100%"
										/>
									</div>
								</a>
								<a href="https://nightlightvisuals.itch.io/" style={socialColumn}>
									<div style={socialIcon}>
											<img
												alt="Itch.io Icon"
												src={socialItch} 
												width="100%"
											/>
									</div>
								</a>  
								<a href="https://www.linkedin.com/in/carng" style={socialColumn}>
									<div style={socialIcon}>
										<img
											alt="LinkedIn Icon"
											src={socialLinkedIn} 
											width="100%"
										/>
									</div>
								</a>
								<a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA" style={socialColumn}>
									<div style={socialIcon}>
										<img
											alt="Youtube Icon"
											src={socialYoutube} 
											width="100%"
										/>  
									</div>
								</a>
								<a href="https://society6.com/carmenng" style={socialColumn}>
									<div style={socialIcon}>
										<img
											alt="Society6 Icon"
											src={socialSociety6} 
											width="100%"
										/>
									</div>
								</a>
							</div> 
						</div>
					</div>

					<Link to ="/"><img className={style.logo} src={logo} alt="Night Light Visuals Logo"/></Link>

					<div id={style.burgerClosed}>
						<HamburgerMenu
							isOpen={this.state.isOpen}
							menuClicked={this.handleClick.bind(this)}
							width={22}
							height={18}
							strokeWidth={2}
							rotate={0}
							color='var(--nlv-white)'
							borderRadius={0.5}
							animationDuration={0.5}
						/>
					</div>
				</MediaQuery>
			</header>
	  );
	}
}

export default Header;
