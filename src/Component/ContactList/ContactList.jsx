import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import './ContactList.css'
import Loader from "../Loader/Loader"
import HeaderContactList from "../HeaderContactList/HeaderContactList"

const ContactsList = () => {
	const { contacts, isLoadingContacts } = useContext(ContactContext)
	if (isLoadingContacts) {
		return (
			<Loader />
		)
	}
	return (
		<div className='contact_list__container'>
			<HeaderContactList/>
			{
				contacts.map(
					(contact) => {
						const mensajes = contact.messages
						const ultimo = mensajes[mensajes.length - 1]
						return <ContactItem
							key={contact.id}
							id={contact.id}
							name={contact.name}
							last_time_connected={contact.last_time_connected}
							img={contact.img}
							last_message={ultimo.texto}
							unread_messages={contact.unread_messages}
						/>
					}
				)
			}
		</div>
	)
}

export default ContactsList