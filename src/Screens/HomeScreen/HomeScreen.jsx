import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import './HomeScreen.css'
import ChatHeader from '../../Component/ChatHeader/ChatHeader'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import '../../App.css'
import BarAside from '../../Component/Aside/Aside';
import ContactsList from '../../Component/ContactList/ContactList';

export default function HomeScreen() {
	const { contact_id } = useParams()
	const { loadMessages, isMessagesLoading } = useContext(MessagesContext)
	useEffect(
		() => {
			loadMessages(contact_id)
		},
		[contact_id]
	)
	const { contact_detail, loadContact } = useContext(ContactDetailContext)
	useEffect(
		() => {
			loadContact(contact_id)
		}, [contact_id]
	)
	
	if (isMessagesLoading) {
		return (
			<div className='chat_app'>
				<div className="container_list_chat">
					<ContactsList />
				</div>
				<div className="load">
					<div className="contenedor-loader">
						<div className="loader1"></div>
						<div className="loader2"></div>
						<div className="loader3"></div>
						<div className="loader4"></div>
					</div>
					<div className="cargando">Cargando...</div>
				</div>

			</div>
		)
	}
	return (
		<div className='chat_app'>
			<div className="container_list_chat">
				<BarAside/>
				<ContactsList/>
			</div>
			<div className='chat_container'>
				<div className='chat_container__h_c'>
					<ChatHeader />
					<Chat />
				</div>
				<NewMessageForm />
			</div>
		</div>
	)
}


