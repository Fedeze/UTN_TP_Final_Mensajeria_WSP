import React, { useContext, useEffect } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import { useParams } from 'react-router'
import ICONS from '../../Asset/Icons'
import { Link } from "react-router"
import './ContactDetail.css'

export const ContactDetail = () => {
  const { contact_detail, IsLoadingContactDetail } = useContext(ContactDetailContext)
  if (IsLoadingContactDetail || !contact_detail) {
    return <h2>Cargando</h2>
  }
  return (
    <div className='detail_contact'>
      <div className="details__butons">
        <Link to={`/contacts/${contact_detail.id}/messages`} className='details__butons_link'>
          <ICONS.LeftArrow />
        </Link>
        <div className='details'>
          <img src={contact_detail.img} alt="" className='detail_img' />
          <span className='details_name'>{contact_detail.name}</span>
          <span className='details_last_time'>Últ. vez a las {contact_detail.last_time_connected}</span>
        </div>
        <div className="details_option">
          <ICONS.Option />
        </div>
      </div>
      <div className="funtions">
        <button>
          <ICONS.Phone />
          <span>Llamar</span>
        </button>
        <button>
          <ICONS.Camera />
          <span>Video</span>
        </button>
        <button>
          <ICONS.Search />
          <span>Buscar</span>
        </button>
      </div>
      <hr className='detail_contac__divisor' />
      <span className='detail_contact__state'>{contact_detail.state}</span>
      <hr className='detail_contac__divisor' />
      <div className='detail_contac__config'>
        <button>
          <ICONS.Noficacion className='detail_icons'/>
          <span>Notificaciones</span>
        </button>
        <button>
          <ICONS.Multimedia className='detail_icons'/>
          <span>Visibilidad de archivos multimedia</span>
        </button>
        <button>
          <ICONS.Star className='detail_icons'/>
          <span>Mensajes destacados</span>
        </button>
      </div>
      <hr className='detail_contac__divisor' />
      <div className='detail_contac__config'>
        <button>
          <ICONS.Lock className='detail_icons'/>
          <div className='config_contain'>
            <span>Cifrado</span>
            <p>Los mensajes y las llamadas están cifrados de extremo a extremo. Toca para verificarlo</p>
          </div>
        </button>
        <button>
          <ICONS.Temporal className='detail_icons'/>
          <div className='config_contain'>
            <span>Mensajes temporales</span>
            <p>Desactivados</p>
          </div>
        </button>
        <button>
          <ICONS.Restricted className='detail_icons'/>
          <div className='config_contain'>
            <span>Restringir chat</span>
            <p>Restringe y oculta este chat en este dispositivo</p>
          </div>
        </button>
        <button>
          <ICONS.Privacy className='detail_icons'/>
          <div className='config_contain'>
            <span>Privacidad avanzada del chat</span>
            <p>Desactivado</p>
          </div>
        </button>
        <button>
          <ICONS.Trascription className='detail_icons' />
          <div className='config_contain'>
            <span>Transcripciones</span>
            <p>Español</p>
          </div>
        </button>
      </div>
    </div>
  )
}
