import React from 'react'

export default props => (
  <section id="legendas">
    <div className="form-group col-xs-12">
      <div className="legenda Brown">.</div>
      <div style={{'marginLeft': '5px'}}> Doador(a)</div>
    </div>
    <br/><br/>
    <div className="form-group col-xs-12">
      <div style={{'marginRight': '10px'}}>Não Urgente</div>
      <div className="legenda Blue">.</div>
      <div className="legenda Light-Green">.</div>
      <div className="legenda Yellow">.</div>
      <div className="legenda Red">.</div>
      <div style={{'marginLeft':'10px'}}>Emergência</div>
    </div>
  </section>
)