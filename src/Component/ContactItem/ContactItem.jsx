import React, { useContext } from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({ name, id, last_time_connected, img, last_message, unread_messages }) => {
	if (unread_messages!=='') {
		
		return (
		<Link to={`/contacts/${id}/messages`} className="link_to_chat">
			<div className="profile_container">
				<div className="profile_container__img_message">
					<img src={img} alt={`${name} image profile`} className="profile_image" />
					<div className="profile_c__name_message">
						<h3 className="profile_name">{name}</h3>
						<span className="profile_last_message">{last_message}</span>
					</div>
				</div>
				<div className="profile_c__time_unread">
					<span className="profile_time_connected">{last_time_connected}</span>
					<span className="profile_undead">{unread_messages}</span>
				</div>
			</div>
		</Link>
	)
	
	} else {
		return (
		<Link to={`/contacts/${id}/messages`} className="link_to_chat">
			<div className="profile_container">
				<div className="profile_container__img_message">
					<img src={img} alt={`${name} image profile`} className="profile_image" />
					<div className="profile_c__name_message">
						<h3 className="profile_name">{name}</h3>
						<span className="profile_last_message">{last_message}</span>
					</div>
				</div>
				<div className="profile_c__time_unread">
					<span className="profile_time_connected">{last_time_connected}</span>
				</div>
			</div>
		</Link>
	)
	}
	
}

export default ContactItem