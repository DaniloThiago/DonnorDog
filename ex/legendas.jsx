import React from 'react'

export default props => (
  <section style={{"marginTop":"180px", "height": "100px"}}>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Teal" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Doador</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Pink" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Doadora</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Blue" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Não Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Green" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor pouco Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Yellow" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Urgente</label>
    </div>
    <div className="form-group col-xs-6 col-sm-2">
      <div className="form-group-addon">
        <i style={{"width": "20px"}} className="fa fa-stop Red" aria-hidden="true"></i>
      </div>    
      <label className="inline-control">Receptor Emergência</label>
    </div>
  </section>
)