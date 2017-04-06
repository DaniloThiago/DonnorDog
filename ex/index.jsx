import './estilo'
import React from 'react'
import ReactDOM from 'react-dom'
import Status from './status'
import Dog from './dog'

ReactDOM.render(
	<div>
	<Status categoria='Doadoras'>
		<Dog name='Lola' lastName="Habilitada"/>
		<Dog name='Nina' lastName="Repouso"/>
	</Status>
	<Status categoria='Receptor'>
		<Dog name='Toby' lastName="Urgente"/>
		<Dog name='Pingo' lastName="Grave"/>
		<Dog name='Casca' lastName="Risco"/>
	</Status>
	</div>
	, document.getElementById('app'))