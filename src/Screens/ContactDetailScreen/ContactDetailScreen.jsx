import React, { useContext, useEffect } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { useParams } from 'react-router'
import { ContactDetail } from '../../Component/ContactDetail/ContactDetail'

export default function ContactDetailScreen() {
    const { contact_id } = useParams()
    const { contact_detail, loadContact } = useContext(ContactDetailContext)
        useEffect(
            () => {
                loadContact(contact_id)
            }, []
        )
    console.log(contact_id)
    return (
        <ContactDetail/>
    )
}
