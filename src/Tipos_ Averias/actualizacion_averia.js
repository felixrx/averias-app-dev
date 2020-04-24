import React, { Component } from "react";

import "./actualizacion_averia"
import axios from 'axios';








class Up_date extends React.Component {

   constructor(props) {
     
   
      super(props);
      this.state = {

         users:{ results:[{descripcion:null}]},
         results:[{descripcion:null}],
            loading: true,
        person:null,
           person:null,
           descripcion:'',
           data:[],
        
        fields: {},
        errors: {}
      }



 this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

}





 handleChange(e) {

  
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
       this.setState({ [e.target.name]:e.target.value });
     

    }

 



handleSubmit (event){
        
      event.preventDefault();

      var datas = {
        numero: this.state.fields.numero
    }
    fetch("http://localhost:4000/api/productos/", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(datas)
    }) 
    .then((response) => {
     return  response.json()
   })

    .then((data)=>{

      this.setState({users:data})
      console.log(data)

       console.log(this.state.users.results[0].descripcion)
     
    })
 


}
  





    handleSubmitActualizar = event =>{
  
      event.preventDefault();
  

  
      const url ='http://localhost:4000/api/actualizarAveria/'
      const data = {
                      numero:this.state.fields.numero,
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
                       cisco24g:this.state.cisco24g,
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

const { users } = this.state;
 const { results } = this.state; 
      
    return (
        <div className="container border border-secondary form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
   
        <br />
        


          <form onSubmit={this.handleSubmit}>

          <br/><br/><br/>

               

 
          <h2>Formulario Actualizacion  de Averia</h2>
          <br/><br/>
            <div className="border rounded border-secondary col-xs-1 col-sh-12 col-md-12 col-lg-12">
              <br /><br />
                {/* fila que contiene el primer formulario*/}
              <div className="rows  col-lg-12">
              
                 {/* columna izquierda*/}
              <div className="col-lg-2 float-left">
                <div className="h-100 d-inline-block"></div>
              </div>

                 {/* columna del centro*/}
            <div className=" col-lg-8 float-left ">
            <label htmlFor="" className="float-left">
                   <h6>Numero de Averia:</h6>
                  </label>
                 <div className="input-group">                
                <div className="col-lg-8">
                  
         
       
                  <input
                    type="text"
                 
                    className="form-control"
                    id="numero"
                    placeholder=""
                    name="numero"
                    onChange={this.handleChange}
                    value={this.state.fields.numero}
                    
                    />
                    
                </div>
                  <div className="col-md-2  float-left"><input
               type="submit"
               value="Buscar"
               className="form-control btn btn-danger"/></div>

              
               <br />
              
</div>
              
                    <div className="input-group">                
                <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                   <h6>Descripción Evento Mayor:</h6>
                  </label>
         
                  <input
                    type="text"
                 
                    className="form-control"
                    id="descripcion"
                    placeholder="Descripcion"
                    name="descripcion"
                   
                     value={this.state.users.results[0].descripcion}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.descripcion}</span></h5>

                  
                   </div>
                </div>
              </div>

                <br />

               <div className="input-group">
                
                <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                     <h6>Cantidad De Clientes Afectados:</h6>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cantidad"
                    placeholder="Cantidad"
                    name="cantidad"
                    onChange={this.handleChange}
                    value={users.results[0].cantidad}
                    
                   />
                   <div>
                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.cantidad}</span></h5>
                   </div>
                </div>
              </div>

                  <br/>

                <div className="input-group">
                
                <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                      <h6>Boleto de Referencia:</h6>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="boleto"
                    placeholder="Boleto de Referencia"
                    name="boleto"
                    onChange={this.handleChange}
                    value={users.results[0].boleto}
                    
                   />
                   <div>
                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.boleto}</span></h5>
                   </div>
                </div>
              </div>



               <br />
                 
              <div className="input-group">
                <div className="col-lg-12">
                 <label htmlFor="" className="float-left">
                  <h6>Tipo de Clientes impactados:</h6>
                </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tipo"
                    placeholder="Tipo de Clientes impactados"
                    name="tipo"
                    onChange={this.handleChange}
                    value={users.results[0].tipo}
                    
                   />
                   <div>
                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.tipo}</span></h5>
                   </div>
                </div>
              </div>


               <br />

               <div className="input-group">
               
                <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                   <h6>Pueblos Afectados:</h6>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pueblos"
                    placeholder="Pueblos Afectados"
                    name="pueblos"
                    onChange={this.handleChange}
                     value={users.results[0].pueblos}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.pueblos}</span></h5>

                  
                   </div>
                </div>
              </div>


              <br/>
             

              <div className="input-group">
                
                <div className="col-lg-12">
                <label htmlFor="" className="float-left">
                  <h6>Zona/Región Impactada:</h6>{" "}
                </label>
                  <select className="form-control"
                          name="zona"
                         value={users.results[0].zona}
                          id="zona"
                    
                   
                   
                          onChange={this.handleChange}>
                    <option value={false} >Seleccionar</option>
                    <option value="Metro">Metro</option>
                  </select>
                  <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.zona}</span></h5>

                  
                   </div>
                </div>
              </div>
              {/* fin de columna del centro*/}
          </div>
             {/* columna derecha*/}
          <div className=" col-lg-2 float-left"> </div>


        {/* fin de  fila que contiene el primer formulario*/}
      </div>
       <div className="input-group"> </div>
       <br /><br />
            </div>
            <br />

            <div className="container border rounded border-secondary  form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
              <div className="col-lg-12">
                <label htmlFor="" className="col-lg-12 control-label">
                <br />
                  <h6>Impacto en el servicio:</h6>
                </label>
              

              <br />
                    {/* fila que contiene el segundo formulario*/}
              <div className="rows   col-lg-12">


                  {/* columna del izquierda*/}
                 <div className="col-lg-2 float-left ">
                <div className="h-100 d-inline-block"></div>
             

</div>

                  {/* columna del centro*/}
            <div className=" col-lg-8 float-left  ">

                 <div className="input-group">
               
                <div className="col-lg-12">
                 <label htmlFor="" className="float-left">
                  <h6>Radio Bases:</h6>
                </label>
                  <input
                    type="text"
                    className="form-control"
                    id="radio"
                    placeholder="Radio Bases"
                    name="radio"
                    onChange={this.handleChange}
                      value={users.results[0].radio}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.radio}</span></h5>

                  
                   </div>
                </div>
              </div>

                <br />
                <div className="input-group">
                  
                  <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                  <h6>Remotos:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="remotos"
                      placeholder="Remotos"
                      name="remotos"
                      onChange={this.handleChange}
                       value={users.results[0].remotos}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.remotos}</span></h5>

                  
                   </div>
                  </div>
                </div>
                <br />

                 <div className="input-group">
                  
                  <div className="col-lg-12">
                   <label htmlFor="" className="float-left">
                  <h6>DSLAMS:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dslams"
                      placeholder="DSLAMS"
                      name="dslams"
                      onChange={this.handleChange}
                    value={users.results[0].dslams}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.dslams}</span></h5>

                  
                   </div>
                  </div>
                </div>
                <br />

                <div className="input-group">
                 
                  <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                  <h6>VRADS:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="vrads"
                      placeholder="VRADS"
                      name="vrads"
                      onChange={this.handleChange}
                       value={users.results[0].vrads}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.vrads}</span></h5>

                  
                   </div>
                  </div>
                </div>
                <br />
                 <div className="input-group">
                 
                  <div className="col-lg-12">
                   <label htmlFor="" className="float-left">
                  <h6>EFM (MXK/RAPTOR):</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="efm"
                      placeholder="EFM (MXK/RAPTOR)"
                      name="efm"
                      onChange={this.handleChange}
                      value={users.results[0].efm}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.efm}</span></h5>

                  
                   </div>
                  </div>
                </div>

                <br />
                 <div className="input-group">
                  
                  <div className="col-lg-12">
                   <label htmlFor="" className="float-left">
                  <h6>GPON:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="gpon"
                      placeholder="GPON"
                      name="gpon"
                      onChange={this.handleChange}
                       value={users.results[0].gpon}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.gpon}</span></h5>

                  
                   </div>
                  </div>
                </div>
                <br />

                <div className="input-group">
                 
                  <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                  <h6>Cisco 3800:</h6>
                </label>

                    <input
                      type="text"
                      className="form-control"
                      id="cisco3800"
                      placeholder="Cisco 3800"
                      name="cisco3800"
                      onChange={this.handleChange}
                       value={users.results[0].cisco3800}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.cisco3800}</span></h5>

                  
                   </div>
                  </div>
                </div>
                <br />
                 <div className="input-group">
                  
                  <div className="col-lg-12">
                    <label htmlFor="" className="float-left">
                  <h6>Cisco 24G:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cisco24g"
                      placeholder="Cisco 24G"
                      name="cisco24g"
                      onChange={this.handleChange}
                       value={users.results[0].cisco24g}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.cisco24g}</span></h5>

                  
                   </div>
                  </div>
                </div>

                <br />


                
                <div className="input-group">
                 <div className="col-lg-12">
                    <label htmlFor="" className="float-left">
                  <h6>Clientes:</h6>
                </label>
                    <input
                      type="text"
                      className="form-control "
                      id="clientes"
                      placeholder="Clientes"
                      name="clientes"
                      onChange={this.handleChange}
                     value={users.results[0].clientes}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.clientes}</span></h5>

                  
                   </div>
                  </div>
                </div>
              <br />










<div className="input-group">

         <div className="col-lg-6">
                  <label htmlFor="" className="float-left">
                  <h6>Fecha/Hora:</h6>
                </label>
                  <input
                    type="Date"
                    className="form-control "
                    id="fecha"
                    placeholder="Fecha"
                    name="fecha"
                    onChange={this.handleChange}
                    
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.fecha}</span></h5>

                  
                   </div>

                </div>  



                       <div className="col-lg-6">
                  <label htmlFor="" className="float-left">
                  <h6>causa:</h6>
                </label>
                 <input
                    type="text"
                    className="form-control "
                    id="causa"
                    placeholder="Causa"
                    name="causa"
                    onChange={this.handleChange}
                    value={users.results[0].causa}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.causa}</span></h5>

                  
                   </div>
                </div>




</div>




              <div className="input-group">
                 
                 <div className="col-lg-12">
                 <label htmlFor="" className="float-left">
                  <h6>comentarios:</h6>
                </label>
                   
                    <textarea
                    className="p-3 mb-2 text-dark  w-100 p-3 d-inline-block"
                    defaultValue="Escribe aquí tus comentarios"
                    name="comentarios"
                    id="comentarios"
                    rows="10"
                   
                    onChange={this.handleChange}
                     value={users.results[0].comentarios}
                    
                   />
                   <div>

                    <h5><span className="badge badge-danger float-left">
                    {this.state.errors.comentarios}</span></h5>

                  
                   </div>
                  </div>
                </div>





   <div className="rows col-md-12 float-left ">

  <div className="col-md-4  float-left"><input
               type="submit"
               value="Actualizar"
               className="form-control btn btn-danger"/></div>
            


                <div className="col-md-4 float-left h-10 w-10 p-3 d-inline-block"></div>



          <div className="col-md-4 Mb-2 float-left"><input
               type="submit"
               value="Limpiar"
               onClick={this.clean}
               className="form-control btn btn-danger"/></div>  

   </div>


<br/>

<br/>
<br/>
        <div className="p-3 mb-2 text-dark  border rounded border-secondary">
                <p className="text-justify">
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

            {/* columna derecha*/}
      <div className=" col-md-2 float-left  "></div>


             <div className="input-group"> </div>

            </div>

            </div>
          </div>  

        </form> 
      </div>
    );
  }
}


export default Up_date;