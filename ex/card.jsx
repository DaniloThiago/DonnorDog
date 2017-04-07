import './app'
import './estilo'
import React from 'react'


export default props => (
	<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <article className={"material-card "+props.color} >
      <h2>
        <span>
          {props.name}
        </span>
        <strong>
          <i className="fa fa-fw fa-ambulance"></i>
          {props.title}
        </strong>
      </h2>
      <div className="mc-content">
        <div className="img-container">
          <img className="img-responsive" src={props.image}></img>
        </div>
        <div className="mc-description">
          {props.description}
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