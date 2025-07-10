import React, { useContext } from 'react'
import './NewMessageForm.css'
import { LuSticker } from "react-icons/lu";
import { MdOutlineAttachFile } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import Message from '../Message/Message';
import { MessagesContext } from '../../Context/MessagesContext';

export default function NewMessageForm() {
	const {addNewMessage}=useContext(MessagesContext)
	const handleSubmitNewMessage = (event) => {
		event.preventDefault()
		let new_text = event.target.text.value
		addNewMessage(new_text)
		event.target.text.value = ""
	}
	return (
		<div className='new_message'>
			<form className='form_content' onSubmit={handleSubmitNewMessage}>
				<div className='commands'>
					<LuSticker className='command_icon' />
					<label htmlFor="text"></label>
					<textarea className='text_area' id='text' name='text' minLength={1} required placeholder='Mensaje'></textarea>
					<MdOutlineAttachFile className='command_icon' />
					<IoCameraOutline className='command_icon' />
				</div>
				<button type='submit' className='button_submit'><IoMdSend /></button>
			</form>
		</div>

	)
}