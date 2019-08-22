import React from 'react'
import style from '../Profile/Profile.module.css'
import profile from '../../assets/images/profile.jpg'

class Profile extends React.PureComponent {
    constructor(props){
        super(props);
        this.imageLoadedHandler = this.imageLoadedHandler.bind(this);
    }

    imageLoadedHandler(){
        this.props.onImageLoad();
    }

    render(){
        return (
            <div id={style.profileWrapper}>
                <div id={style.profile}>
                    <img src={profile} alt="Night Light Visuals profile" onLoad={() => {this.imageLoadedHandler()}} />
                    <div id={style.profileText}>
                        <p>
                            <span style={{color: "var(--nlv-cyan)", fontSize: "1.8rem"}}>Hi! I'm Carmen. Welcome to my portfolio!</span> 
                            <br/>
                            I'm a web developer by profession and have been for the last 3 years. With my viscom background, I focus primarly on front-end development but I've done some full stack work too. I'm also an avid board game player and game designer so you'll so you'll find some game projects too. I'm always eager to learn new skills and gain experience so stay tuned while I continue to grow this portfolio and my resume.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;