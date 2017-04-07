import './estilo'
import './app'
import React from 'react'
import ReactDOM from 'react-dom'
import  Cards from './cards'
import  Nav from './nav'
import { openCard, navAction } from '../utils/reactUtils'

let cards = [];

firebase.database().ref('dogs').on('value', function(snapshot) {
	snapshot.forEach(function (item) {
		cards.push(item.val())
	});
	ReactDOM.render(
			<div>
				<Nav />
				<div style={{"marginTop":"130px"}}>
					<p>
						Para cadastrar seu cãozinho na plataforma, enviei um e-mail para “adm.donnordog@gmail.com”, informando os seguintes campos.
					</p>
					<Cards cards={cards} />
				</div>
			</div>
		, document.getElementById('app'));

		{
			openCard()
			navAction()
		}
});