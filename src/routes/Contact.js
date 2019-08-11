import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactInfo/ContactInfo';

export default function Contact() {
    const title = {
        color: "var(--nlv-white)",
        fontSize: "3rem",
        letterSpacing: "1.2px",
        marginBottom: "20px"
    }
    
    return (
        <div style={{width: "960px", height: "calc(100% - 110px)", margin: "0 auto", textAlign: "center"}}>
            <p style={title}>Got a question? Get in touch!</p>
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}