import React, { useContext, useEffect } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { useParams } from 'react-router'
import { ContactDetail } from '../../Component/ContactDetail/ContactDetail'
import Loader from '../../Component/Loader/Loader'
import { ContactContext } from '../../Context/ContactContext'
import ContactsList from '../../Component/ContactList/ContactList'
import Aside from '../../Component/Aside/Aside'
import './ContactDetailScreen.css'

export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { contact_detail, loadContact, isLoadingContactDetail } = useContext(ContactDetailContext)
    useEffect(
        () => {
            loadContact(contact_id)
        }, []
    )

    if (isLoadingContactDetail) {
        return (
            <div className="contact_detail_screen__container">
                <div className="contact_detail_screen__a_cl">
                    <Aside />
                    <ContactsList />
                </div>
                <Loader />
            </div>

        )
    }
    return (
        <div className="contact_detail_screen__container">
                <div className="contact_detail_screen__a_cl">
                    <Aside className='contact_detail_screen__aside'/>
                    <ContactsList className='contact_detail_screen__contact_list' />
                </div>
                <ContactDetail className='contact_detail_screen__contact_detail'/>
            </div>
        
    )
}
