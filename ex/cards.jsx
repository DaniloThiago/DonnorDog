import React from 'react'

class Card extends React.Component {

	constructor(props) {
		super(props);		
	}

	handleClickBtn(event) {
		event.preventDefault();
		var el = event.target;
		var card = $(el).parent('.material-card');
		var icon = $(el).children('i');
		
		if(!!$('.popover.in').length) {
			console.log($(el).closest('.material-card').find('.fa-phone').click())
		}

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
		event.preventDefault();
		var el = event.target;
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

	popover(event) {
		var el = event.target;
		$(el).popover();
	}

	render() {
		let elements = this.props.cards.map((element, i,x) => {		
			
			return (
				<div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
			    <article className={"material-card "+((element.necessidade!='Doador')?element.necessidade:((element.sexo=="Macho")?"Teal":"Pink"))} >
			      <h2 style={{"textShadow":"1px 1px 5px #000"}}>
		          <i style={{"fontWeight": "bold", "marginRight": "5px"}} className={"fa fa-fw "+ ((element.necessidade!='Brown')?"fa-heartbeat":"fa-heart")}></i> 
		          <span className="inline-block text-shadow">{ element.nome }</span><br/>
		          <i style={{"fontWeight": "bold", "marginRight": "5px"}} className={"fa fa-fw inline-block text-shadow "+ ((element.sexo!='Masculino')?"fa-mars":"fa-venus")}></i> 
		          { element.raca }
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
			        <h4>Contatos</h4>
			        {(element.facebook?<a className="fa fa-fw fa-facebook" href={element.facebook} target="_blank"></a>:'')}
			        {(element.instagram?<a className="fa fa-fw fa-instagram" href={element.instagram} target="_blank"></a>:'')}
			        {(element.telefone?<a style={{"cursor": "pointer"}} onMouseEnter={this.popover} data-toggle="popover" data-placement="top" data-content={element.telefone} className="fa fa-fw fa-phone"></a>:'')}
			        {(element.email?<a className="fa fa-fw fa-envelope" href={"mailto:"+element.email} target="_parent"></a>:'')}
			      </div>
			    </article>
				</div>
			)	
		})
			if(!elements.length) elements = <div style={{'color': '#cdcdcd', 'textShadow': '1px 1px 1px #666', 'background': '#eee', 'padding':'10px'}}>
				<i className="fa fa-4x fa-paw" aria-hidden="true"></i>
				<h4 style={{'color':'#666'}}>Não há animal cadastrado</h4>
			</div>			
			return <span>{elements}</span>
	}
}

export default Card;