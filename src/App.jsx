import React, { useContext, useState } from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import {Routes, Route} from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import './App.css'

function App() {
	
	return (
		<div>
			
			<Routes>
				
				<Route
					path='/contacts/:contact_id/messages' /* Configuramos el prametro de busqueda :contact_id */
					element={<HomeScreen/>} 
				/>
				<Route 
					path='/'
					element={<ContactScreen/>}
				/>
				<Route
					path='/contact_detail/:contact_id'
					element={<ContactDetailScreen/>}
				/>
			</Routes>
		</div>
	)
}

export default App
