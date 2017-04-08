import './estilo'
import './app'
import React from 'react'
import ReactDOM from 'react-dom'
import Cards from './cards'
import Nav from './nav'
import { navAction } from '../utils/reactUtils'

let cards = [];

firebase.database().ref('dogs').on('value', function(snapshot) {
	snapshot.forEach(function (item) {
		cards.push(item.val())
	});
	ReactDOM.render(
			<div>
				<Nav />
				<div style={{"marginTop":"180px"}}>
					<Cards cards={cards} />
				</div>
			</div>
		, document.getElementById('app'));

	{ navAction() }
	
});