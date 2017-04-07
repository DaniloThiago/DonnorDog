import React from 'react'

class Card extends React.Component {

	render() {
		let elements = this.props.cards.map((element) => {
			return (
				<div key={element.name} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			    <article className={"material-card "+element.color} >
			      <h2>
			        <span>
			          {element.name}
			        </span>
			        <strong>
			          <i className={"fa fa-fw "+element.ico}></i>
			          {element.raca}
			        </strong>
			      </h2>
			      <div className="mc-content">
			        <div className="img-container">
			          <img className="img-responsive" src={element.image}></img>
			        </div>
			        <div className="mc-description">
			          {element.description}
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
		})
			return <span>{elements}</span>
	}
}

export default Card;