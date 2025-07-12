import React, { useContext } from 'react'
import ContactsList from '../../Component/ContactList/ContactList'
import Aside from '../../Component/Aside/Aside'
import ChatOff from '../../Component/ChatOff/ChatOff'
import './ContactScreen.css'

export default function ContactScreen() {

    return (
        <div className='contacts_screen__container'>
            <div className='contacts_screen__a_cl'>
                <Aside className='contacts_screen__aside'/>
                <ContactsList className='contacts_screen__contact_list'/>
            </div>
            <div className='contacts_screen__chat_off'>
                <ChatOff />
            </div>
        </div>
    )
}