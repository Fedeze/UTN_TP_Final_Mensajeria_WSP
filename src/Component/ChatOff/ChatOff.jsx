import React from 'react'
import './ChatOff.css';
import ICONS from '../../Asset/Icons';

export default function ChatOff() {
  return (
    <div className='chatoff'>
      <div className="chatoff_content">
        <ICONS.WhatssApp className='chatoff_icon'/>
        <span className='chatoff_text'>¡Bienvenidos al WhatssApp de la Vecindad!</span>
      </div>
    </div>
  )
}
