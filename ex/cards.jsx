import React from 'react'

class Card extends React.Component {

	constructor(props) {
		super(props);
		
	}

	handleClickBtn(event) {
		event.preventDefault()
		var el = event.target
			var card = $(el).parent('.material-card');
		var icon = $(el).children('i');
		icon.addClass('fa-spin-fast');
		if (card.hasClass('mc-active')) {
		  card.removeClass('mc-active');
		  window.setTimeout(function() {
		    icon.removeClass('fa-arrow-left').removeClass('fa-spin-fast').addClass('fa-bars');
		  }, 800);
		} else {
		  card.addClass('mc-active');
		  window.setTimeout(function() {
		    icon.removeClass('fa-bars').removeClass('fa-spin-fast').addClass('fa-arrow-left');
		  }, 800);
		}
	}

	handleClickIcon(event) {
		event.preventDefault()
		var el = event.target
		var card = $(el).closest('.material-card');
		var icon = $(el).children('i');
		$(el).addClass('fa-spin-fast');
		if (card.hasClass('mc-active')) {
		  card.removeClass('mc-active');
		  window.setTimeout(function() {
		    $(el).removeClass('fa-arrow-left').removeClass('fa-spin-fast').addClass('fa-bars');
		  }, 800);
		} else {
		  card.addClass('mc-active');
		  window.setTimeout(function() {
		    $(el).removeClass('fa-bars').removeClass('fa-spin-fast').addClass('fa-arrow-left');
		  }, 800);
		}
	}
	render() {
		let elements = this.props.cards.map((element, i) => {			
			return (
				<div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			    <article className={"material-card "+((element.necessidade!='Doador')?element.necessidade:((element.sexo=="Macho")?"Teal":"Pink"))} >
			      <h2 style={{"textShadow":"1px 1px 5px #000"}}>
			        <span>
			          {element.nome}
			        </span>
			        <strong>
			          <i className={"fa fa-fw "+ ((element.necessidade!='Doador')?"fa-ambulance":"fa-heart")}></i>
			          {element.raca +" - "+ element.sexo}
			        </strong>
			      </h2>
			      <div className="mc-content">
			        <div className="img-container">
			          <img className="img-responsive" src={element.foto}></img>
			        </div>
			        <div className="mc-description">
			          {element.mensagem}
			        </div>
			      </div>
			      <a className="mc-btn-action" onClick={this.handleClickBtn.bind()}>
			      	<i className="fa fa-bars" onClick={this.handleClickIcon.bind()}></i>
			      </a>
			      <div className="mc-footer">
			        <h4>Social</h4>
			        <a className="fa fa-fw fa-facebook" href={element.facebook} target="_blank"></a>
			        <a className="fa fa-fw fa-instagram" href={element.instagram} target="_blank"></a>
			        <a className="fa fa-fw fa-twitter" href={element.twitter} target="_blank"></a>
			        <a className="fa fa-fw fa-envelope" href={"mailto:"+element.email} target="_parent"></a>
			      </div>
			    </article>
				</div>
			)	
		})
			return <span>{elements}</span>
	}
}

export default Card;