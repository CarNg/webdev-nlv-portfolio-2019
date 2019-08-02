import React from 'react';
//CSS
import style from './Footer.module.css';
//Images
import socialEmail from '../../assets/images/socialEmail.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialEmailHover from '../../assets/images/socialEmailHover.png';
import socialLinkedInHover from '../../assets/images/socialLinkedInHover.png';
import socialYoutubeHover from '../../assets/images/socialYoutubeHover.png';


function Footer() {
  	return (
		<footer>
			<div className={style.socialWrapper}>
				<a href="https://www.linkedin.com/in/carng">
					<img
						alt="LinkedIn Icon"
						className={style.socialIcon}
						src={socialLinkedIn} 
						onMouseOver={e => (e.currentTarget.src = socialLinkedInHover)} 
						onMouseOut={e => (e.currentTarget.src = socialLinkedIn)} 
					/>
				</a>
				<a href="mailto:carmenng.media@gmail.com">
					<img
						alt="Email Icon"
						className={style.socialIcon}
						src={socialEmail} 
						onMouseOver={e => (e.currentTarget.src = socialEmailHover)} 
						onMouseOut={e => (e.currentTarget.src = socialEmail)} 
					/>
				</a>
				<a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA/videos?view=0&sort=dd&shelf_id=0">
					<img
						alt="YouTube Icon"
						className={style.socialIcon}  
						src={socialYoutube} 
						onMouseOver={e => (e.currentTarget.src = socialYoutubeHover)} 
						onMouseOut={e => (e.currentTarget.src = socialYoutube)} 
					/>
				</a>
			</div>
			<div className={style.copyright}>
				Copyright &copy; 2019 Night Light Visuals
			</div>
		</footer>
  );
}

export default Footer;
