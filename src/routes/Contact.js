import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm';
import ContactInfo from '../components/ContactInfo/ContactInfo';

export default function Contact() {
    return (
        <div style={{width: "960px", height: "calc(100% - 80px)", margin: "0 auto"}}>
            <ContactForm/>
            <ContactInfo/>
        </div>
    )
}
