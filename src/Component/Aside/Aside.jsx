import React from 'react'
import ICONS from '../../Asset/Icons'
import './Aside.css'

export default function BarAside() {
  return (
    <div className='BarAside'>
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
