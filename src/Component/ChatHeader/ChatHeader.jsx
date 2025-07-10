import { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { Link } from "react-router"
import ICONS from '../../Asset/Icons'
import './ChatHeader.css'

const ChatHeader = () => {
  const { contact_detail, IsLoadingContactDetail } = useContext(ContactDetailContext)
  if (IsLoadingContactDetail || !contact_detail) {
    return <h2>Cargando</h2>
  }
  
  return (
    <div className="header_contact">
      <Link to={`/contact_detail/${contact_detail.id}`} className='header_contact__link'>
        <Link to="/" className='header_contact__back_link'>
          <ICONS.LeftArrow />
        </Link>
        <img src={contact_detail.img} className='header_contact__img' alt={`${contact_detail.name} image profile`} />
        <div className="header_contact__data">
          <span className='header_contact__name'>{contact_detail.name}</span>
          <span className='header_contact__last_time'>últ. vez hoy a las {contact_detail.last_time_connected}</span>
        </div>
      </Link>
      <div className="header_contact__icons">
        <ICONS.Option />
      </div>
    </div>
  )
}


export default ChatHeader