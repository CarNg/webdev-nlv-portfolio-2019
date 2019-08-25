import React from 'react'
import style from '../ContactInfo/ContactInfo.module.css'
//Images
import socialYoutube from '../../assets/images/socialYoutube.png';
import socialLinkedIn from '../../assets/images/socialLinkedIn.png';
import socialSociety6 from '../../assets/images/socialSociety6.png';
import socialItch from '../../assets/images/socialItch.png';
import socialGithub from '../../assets/images/socialGithub.png'
import Loading from '../Loading/Loading';

class ContactInfo extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            imageLoadCount: 0
        }
    }

    imageLoadedHandler(){
        this.setState({
            imageLoadCount : this.state.imageLoadCount + 1
        })
    }

    render(){
        return (
            <React.Fragment>
                <Loading loadingText="Making sure I've got everything" hideShow={this.state.imageLoadCount === 5 ? "hide" : ""}/>

                <div className={[this.state.imageLoadCount === 5 ? "show" : "hide", style.wrapper].join(' ')}>
                    <div className={style.emailRow}>
                        Got a question or wanna work together?<br/>
                        <a href="mailto:carmenng.media@gmail.com?Subject=Night%20Light%20Visuals" id={style.email}>
                            carmenng.media@gmail.com
                        </a> <br/>
                    </div>

                    <div className={style.socialRow}>
                        <a href="https://github.com/CarNg/" className={style.socialColumn}>
                            <div className={style.socialIcon}>
                                <img
                                    alt="Github Icon"
                                    src={socialGithub}
                                    onLoad={this.imageLoadedHandler.bind(this)}
                                />
                            </div>
                            <p className={style.socialLabel}>Code Things</p>
                        </a>
                        <a href="https://nightlightvisuals.itch.io/" className={style.socialColumn} target="_blank" rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                    <img
                                        alt="Itch.io Icon"
                                        src={socialItch}
                                        onLoad={this.imageLoadedHandler.bind(this)}
                                    />
                            </div>
                            <p className={style.socialLabel}>Game Things</p>
                        </a>  
                        <a href="https://www.linkedin.com/in/carng" className={style.socialColumn} target="_blank" rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <img
                                    alt="LinkedIn Icon"
                                    src={socialLinkedIn}
                                    onLoad={this.imageLoadedHandler.bind(this)}
                                />
                            </div>
                            <p className={style.socialLabel}>Career Things</p>
                        </a>
                        <a href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA" className={style.socialColumn} target="_blank" rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <img
                                    alt="Youtube Icon"
                                    src={socialYoutube}
                                    onLoad={this.imageLoadedHandler.bind(this)}
                                />  
                            </div>
                            <p className={style.socialLabel}>Video Things</p>
                        </a>
                        <a href="https://society6.com/carmenng" className={style.socialColumn} target="_blank" rel="noopener noreferrer">
                            <div className={style.socialIcon}>
                                <img
                                    alt="Society6 Icon"
                                    src={socialSociety6}
                                    onLoad={this.imageLoadedHandler.bind(this)}
                                />
                            </div>
                            <p className={style.socialLabel}>Print Things</p>
                        </a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactInfo;