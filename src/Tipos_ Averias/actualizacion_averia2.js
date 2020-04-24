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
      console.log(data.results[0].boleto)
      alert(data.results[0].boleto)

       alert(this.state.users.results[0].descripcion)
    })
 


}
    
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

              </div>
               <br />
                  
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
                     onChange={this.handleChange}
                   value={users.results[0].descripcion}
                    
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



               <br />
              

             

        
    

                  {/* columna del centro*/}
          

         
              





<br/>

<br/>
<br/>
        




 

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