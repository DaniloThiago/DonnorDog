import './app'
import './estilo'
import React, { Component } from 'react'

class Card2 extends Component {
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
				that.setState({
					name: item.val().name,
					title: item.val().age
				})				

			});
		});
	}

	render() {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
		    <article className={"material-card "+this.state.color} >
		      <h2>
		        <span>
		          {this.state.name}
		        </span>
		        <strong>
		          <i className="fa fa-fw fa-ambulance"></i>
		          {this.state.title}
		        </strong>
		      </h2>
		      <div className="mc-content">
		        <div className="img-container">
		          <img className="img-responsive" src={this.state.image}></img>
		        </div>
		        <div className="mc-description">
		          {this.state.description}
		        </div>
		      </div>
		      <a className="mc-btn-action">
		      	<i className="fa fa-bars"></i>
		      </a>
		      <div className="mc-footer">
		        <h4>Social</h4>
		        <a className="fa fa-fw fa-facebook"></a>
		        <a className="fa fa-fw fa-instagram"></a>
		        <a className="fa fa-fw fa-twitter"></a>
		        <a className="fa fa-fw fa-envelope"></a>
		      </div>
		    </article>
			</div>
		)
	}
}

export default Card2;