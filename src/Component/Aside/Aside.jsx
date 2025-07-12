import React from 'react'
import ICONS from '../../Asset/Icons'
import './Aside.css'

export default function Aside() {
  return (
    <div className='aside'>
      <ICONS.Chat />
      <ICONS.States />
      <ICONS.Chanel />
      <ICONS.Groups/>
      <hr />
      <ICONS.Shop/>
      <ICONS.Anuncio/>
    </div>
  )
}
