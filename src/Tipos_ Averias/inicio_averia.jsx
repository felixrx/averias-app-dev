import React, { Component } from "react";
import "./inicio_averia";

class Inicio_averia extends Component {
    constructor(){
      super();
      this.state={
        descripcion:'',  	cantidad:'',
        boleto:'',     		tipo:'',
        pueblos:'',      	zona:'',
        radio:'',        	remotos:'',
        dslams:'',       	vrads:'',
        efm:'',          	gpon:'', 
        cisco3800:'',    	cisco24g:'',
        clientes:'',     	fecha:'', 
        causa:'',        	comentarios:'',
        theme: null 
      }
    }
    resetTheme = evt => {
      evt.preventDefault();
      this.setState({ theme: null });
    };
    chooseTheme = (theme, evt) => {
      evt.preventDefault();
      this.setState({ theme });
    };
    handleChange = event =>{
      this.setState({ [event.target.name]:event.target.value })
    };
    handleSubmit = event =>{
      event.preventDefault();
      const url ='http://localhost:4000/nuevas_averias/add'
      const data = {
                      descripcion:this.state.descripcion,
                      cantidad:this.state.cantidad,
                      boleto:this.state.boleto,
                      tipo:this.state.tipo,
                      pueblos:this.state.pueblos,
                      zona:this.state.zona,
                      radio:this.state.radio,
                      remotos:this.state.remotos,
                      dslams:this.state.dslams,
                      vrads:this.state.vrads,
                      efm:this.state.efm,
                      gpon:this.state.gpon,
                      cisco3800:this.state.cisco3800,
                      clientes:this.state.clientes,
                      fecha:this.state.fecha,
                      causa:this.state.causa,
                      comentarios:this.state.comentarios,
                    }
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{'Content-Type': 'application/json'}
    })
      .then(res => res.json())
      .catch(error => console.error('Error:',error))
      .then(response => console.log('Success:',response)); 
  };


  render() {
    return (
        <div className="container border border-secondary form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
        <br />
        <form onSubmit={this.handleSubmit}>
          <br/><br/><br/>
          <h2>Formulario de Inicio de Averia</h2>
          <br/><br/>
            <div className=" border border-secondary col-xs-1 col-sh-12 col-md-12 col-lg-12">
              <br /><br />
              <div className="input-group">
                <label htmlFor="desc" className="col-lg-4 control-label">
                  <h6>Descripción Evento Mayor:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder="Descripcion"
                    name="descripcion"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Cantidad De Clientes Afectados:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="cantidad"
                    placeholder="Cantidad"
                    name="cantidad"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <br />


              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Boleto de Referencia:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="boleto"
                    placeholder="Boleto de Referencia"
                    name="boleto"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Tipo de Clientes impactados:</h6>
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="tipo"
                    placeholder="Tipo de Clientes impactados"
                    name="tipo"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Pueblos Afectados:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="pueblos"
                    placeholder="Pueblos Afectados"
                    name="pueblos"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <br />

              <div className="input-group">
                <label htmlFor="" className="col-lg-4 control-label">
                  <h6>Zona/Región Impactada:</h6>{" "}
                </label>
                <div className="col-lg-6">
                  <select className="form-control"
                          name="zona"
                          value=""
                          onChange={this.handleChange}>
                    <option value="0">Seleccionar</option>
                    <option value="Metro">Metro</option>
                  </select>
                </div>
              </div>
              <br /><br />
            </div>
            <br />

            <div className="container border border-secondary form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
              <div className="col-lg-12">
                <label htmlFor="" className="col-lg-12 control-label">
                <br />
                  <h6>Impacto en el servicio:</h6>
                </label>
              </div>
              <br />
              <div className="input-group">
                <h6 className="col-lg-4">Radio Bases</h6>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    id="radio"
                    placeholder="Radio Bases"
                    name="radio"
                    onChange={this.handleChange}/>
                </div>
              </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">Remotos</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="remotos"
                      placeholder="Remotos"
                      name="remotos"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">DSLAMS</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="dslams"
                      placeholder="DSLAMS"
                      name="dslams"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">VRADS</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="vrads"
                      placeholder="VRADS"
                      name="vrads"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">EFM (MXK/RAPTOR)</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="efm"
                      placeholder="EFM (MXK/RAPTOR)"
                      name="efm"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">GPON</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="gpon"
                      placeholder="GPON"
                      name="gpon"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">Cisco 3800</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="cisco3800"
                      placeholder="Cisco 3800"
                      name="cisco3800"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />

                <div className="input-group">
                  <h6 className="col-lg-4">Cisco 24G</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      id="cisco24g"
                      placeholder="Cisco 24G"
                      name="cisco24g"
                      onChange={this.handleChange}/>
                  </div>
                </div>
                <br />
                
                <div className="input-group">
                  <h6 className="col-lg-4">Clientes</h6>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control "
                      id="clientes"
                      placeholder="Clientes"
                      name="clientes"
                      onChange={this.handleChange}/>
                  </div>
                </div>
              <br />

            <div className="col-lg-12 input-group col-md-offset-5">
              <div className="col-lg-4 input-group  col-md-offset-5">
                <p className="col-lg-4 ">Fecha/Hora </p>
                <div className="col-lg-6">
                  <input
                    type="Date"
                    className="form-control "
                    id="fecha"
                    placeholder="Fecha"
                    name="fecha"
                    onChange={this.handleChange}/>
                </div>
              </div>
              <div className="col-lg-4 input-group col-md-offset-5">
                <p className="col-lg-4 ">causa: </p>

                <div className="col-lg-8">
                  <input
                    type="text"
                    className="form-control "
                    id="causa"
                    placeholder="Causa"
                    name="causa"
                    onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <br /><br /><br />


            <div className="border-secondary">
              <div className="col-lg-4 input-group col-md-offset-5">
                <p className="col-lg-4 ">Comentario: </p>

                <div className="col-lg-6">
                  <textarea
                    className="p-3 mb-2 text-dark"
                    defaultValue="Escribe aquí tus comentarios"
                    name="comentarios"
                    rows="10"
                    cols="100"
                    onChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <br />
            <div>
               <input
               type="submit"
               value="Enviar"
               className="form-control btn btn-danger"/>
            </div>
            <div className="p-3 mb-2 text-dark">
                <p>
                  AVISO DE CONFIDENCIALIDAD: Este correo electrónico, incluyendo
                  en su caso los archivos adjuntos al mismo, puede contener
                  información de carácter confidencial y/o privilegiado, y se
                  envían a la atención única y exclusivamente de la persona y/o
                  entidad a quien va dirigido. La copia, revisión, uso,
                  revelación y/o distribución de dicha información confidencial
                  sin la autorización por escrito de Claro está prohibida. Si
                  usted no es el destinatario a quien se dirige el presente
                  correo, favor de contactar al remitente respondiendo al
                  presente correo y eliminar el correo original incluyendo sus
                  archivos, así como cualquier copia del mismo. Mediante la
                  recepción del presente correo usted reconoce y acepta que en
                  caso de incumplimiento de su parte y/o de sus representantes a
                  los términos antes mencionados, Claro tendrá derecho a los
                  danos y perjuicios que esto le cause.{" "}
                </p>
              </div>
            </div>
        </form> 
      </div>
    );
  }
}
export default Inicio_averia;