import React, { useContext, useEffect } from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageForm/NewMessageForm'
import { useParams } from 'react-router';
import { MessagesContext } from '../../Context/MessagesContext';
import './HomeScreen.css'
import ChatHeader from '../../Component/ChatHeader/ChatHeader'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import '../../App.css'
import Aside from '../../Component/Aside/Aside';
import ContactsList from '../../Component/ContactList/ContactList';
import Loader from '../../Component/Loader/Loader';

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
					<Aside/>
					<ContactsList />
				</div>
				<Loader/>
			</div>
		)
	}
	return (
		<div className='chat_app'>
			<div className="container_list_chat">
				<Aside/>
				<ContactsList />
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


