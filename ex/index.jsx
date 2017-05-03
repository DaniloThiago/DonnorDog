import './estilo'
import './app'
import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './cards'
import Nav from './nav'
import Legendas from './legendas'
import { navAction } from '../utils/reactUtils'

let cards = [];

firebase.database().ref('dogs').on('value', function(snapshot) {
	cards = []
	snapshot.forEach(function (item) {
		cards.push(item.val())
	});
	
	ReactDOM.render(
			<div>
				<Legendas />
				<Nav />
				<div style={{"marginTop":"20px"}}>
					<Cards cards={cards} />
				</div>
			</div>
		, document.getElementById('app'));

	{ navAction() }
	
});