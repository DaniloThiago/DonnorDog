import React from 'react'

export default props => (
  <section id="legendas">
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Teal" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Doador</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Pink" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Doadora</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Blue" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Não Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Green" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor pouco Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Yellow" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop legenda Red" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Emergência</label>
    </div>
  </section>
)