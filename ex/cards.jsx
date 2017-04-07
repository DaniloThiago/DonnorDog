import './app'
import './estilo'
import React, { Component } from 'react'
import Card from './card2'

class Cards extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			title: 'teste title',
			color: 'Pink',
			image: 'https://instagram.fnat1-1.fna.fbcdn.net/t51.2885-15/s750x750/sh0.08/e35/17265662_753792378113725_6876582643392053248_n.jpg',
			description: 'none'
		}
	}

	componentDidMount() {
		var that = this
		firebase.database().ref('dogs').on('value', function(snapshot) {
			snapshot.forEach(function (item) {
				<Card	name={item.val().name}
					title={item.val().age} />
			});
		});
	}

	render() {
		return (
			<Card
				name="Lola"
				color="Red"
				title="Pastor Suiço"
				image="https://instagram.fnat1-1.fna.fbcdn.net/t51.2885-15/s750x750/sh0.08/e35/17265662_753792378113725_6876582643392053248_n.jpg"
				description="Freeman has received Academy Award nominations for his performances in Street Smart, Driving Miss Daisy, The Shawshank Redemption and Invictus ..."
			/>
		)
	}
}

export default Cards;