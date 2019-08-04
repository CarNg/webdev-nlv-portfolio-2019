import React from 'react'
import style from '../ContactForm/ContactForm.module.css'

export default function ContactForm() {
    return (
        <div className={style.wrapper}>
            <p id={style.title}>Got a question? Get in touch!</p>
            <input type="text" placeholder="your name" className={style.formInput} />
            <input type="email" placeholder="your email" className={style.formInput} />
            <textarea type="textarea" placeholder="your message" className={style.formInput} rows="4" style={{resize: "none"}} />
            <div className={[style.button, "button"].join(' ')} style={{marginLeft: "0px"}}>
                send
            </div>
        </div>
    )
}
