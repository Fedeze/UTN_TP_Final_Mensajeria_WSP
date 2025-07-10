import React, { useContext } from 'react'
import "./Message.css";
import { MessagesContext } from '../../Context/MessagesContext';
import ICONS from '../../Asset/Icons';

export default function Message({ emisor, hora, id, texto, status}) {
	const { handleEliminarMensaje } = useContext(MessagesContext)
	const className = {
		status: 'chat_box__status'
	}
	if (status === "visto") {
		className.status = className.status + ' check_visto'
	} else if (status === "no-visto") {
		className.status = className.status + ' check_no_visto'
	} else if (status === "no-recibido") {
		className.status = className.status + ' check_no_recibido'
	}
	if (emisor === 'YO') {
		return (
			<div key={id} className={'chat_box chat_box__user'}>
				<div className="chat_box_content  chat_box_content_user">
					<span className='chat_box__text'>{texto}</span>
					<div className="chat_box__t_s">
						<span className='chat_box__time'>{hora}</span>
						<span className={className.status}><ICONS.Tilde/><ICONS.Tilde/></span>
					</div>
				</div>
				<div className='btn_delete_contaier'>
					<button className='btn_delete' onClick={() => { handleEliminarMensaje(id) }}><ICONS.Delete/></button>
				</div>
			</div>
		)
	} else {
		return (
			<div key={id} className='chat_box chat_box__other'>
				<div className="chat_box_content chat_box_content__other">
					<div className="content_text">
						<span className='chat_box__text'>{texto}</span>
						<div className="chat_box__t_s">
							<span className='chat_box__time'>{hora}</span>
						</div>
					</div>
				</div>
				<div className='btn_delete_contaier'>
					<button className='btn_delete' onClick={() => { handleEliminarMensaje(id) }}><ICONS.Delete/></button>
				</div>
			</div>
		)
	}

}
