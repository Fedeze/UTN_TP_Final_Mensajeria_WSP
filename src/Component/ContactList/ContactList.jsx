import React, { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"
import './ContactList.css'

const ContactsList = () => {
	const { contacts, isLoadingContacts } = useContext(ContactContext)
	if (isLoadingContacts) {
		return (
			<div className="load">
				<div className="contenedor-loader">
					<div className="loader1"></div>
					<div className="loader2"></div>
					<div className="loader3"></div>
					<div className="loader4"></div>
				</div>
				<div className="cargando">Cargando...</div>
			</div>
		)
	}
	
	return (
		<div className='container_list_home'>
			
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