import React from 'react'
import './HeaderContactList.css'
import ICONS from '../../Asset/Icons'
export default function HeaderContactList() {
  return (
    <div className='header_contact_list'>
        <div className="header__log__new_chat">
          <span className='header__logo'>LaVecindad</span>
          <div className="header__new_chat">
            <ICONS.NewChat/><ICONS.Option/>
          </div>
        </div>
        <div className="header__input">
          <ICONS.Search className='header__input_icon'/>
          <input className='header__textarea' placeholder='Buscar un chat'></input>
        </div>
    </div>
  )
}
