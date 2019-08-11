import React from 'react'
import style from '../ContactForm/ContactForm.module.css'

export default function ContactForm() {
    return (
        <div className={style.wrapper}>
            <div className={style.emailRow}>
                Shoot me an email at <br/>    
                <a href="mailto:carmenng.media@gmail.com" id={style.email}>
                    carmenng.media@gmail.com
                </a> <br/>
            </div>
            <input type="text" placeholder="your name" className={style.formInput}/>
            <input type="email" placeholder="your email" className={style.formInput} />
            <textarea type="textarea" placeholder="your message" className={style.formInput} rows="4" style={{resize: "none"}} />
            <div className={[style.button, "button"].join(' ')} style={{ marginTop: "10px", float: "right"}}>
                send email
            </div>
        </div>
    )
}
