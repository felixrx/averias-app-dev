import React from 'react';
import "./inicio_averia";
import "./validaciones";



class Inicio_averia extends React.Component {

   constructor() {
     
       function uniqueId(prefix) {
    var id = + new Date();
    return prefix ? prefix + id : id;
}
      super();
      this.state = {
        
        descripcion:'',  	cantidad:'',
        boleto:'',     		tipo:'',
        pueblos:'',      	zona:'',
        radio:'',        	remotos:'',
        dslams:'',       	vrads:'',
        efm:'',          	gpon:'', 
        cisco3800:'',    	cisco24g:'',
        clientes:'',     	fecha:'', 
        causa:'',        	comentarios:'',
        theme: null,
        fields: {numero:uniqueId()},
        errors: {}
      }



 this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

}



    resetTheme = evt => {
      evt.preventDefault();
      this.setState({ theme: null });
    };
    chooseTheme = (theme, evt) => {
      evt.preventDefault();
      this.setState({ theme });
    };






    clean = event =>{
             function uniqueId(prefix) {
    var id = + new Date();
    return prefix ? prefix + id : id;
    
}
      event.preventDefault();



       
          let fields = {numero:uniqueId()};

          
            fields["descripcion"] = "";

             fields["cantidad"] = "";
             fields["boleto"] = "";
              fields["tipo"] = "";
               fields["pueblos"] = "";
                fields["radio"] = "";
                 fields["remotos"] = "";
                  fields["dslams"] = "";
                   fields["vrads"] = "";
                    fields["efm"] = "";
                     fields["gpon"] = "";
                      fields["cisco3800"] = "";

                       fields["cisco24g"] = "";

                        fields["cisco3800"] = "";

                         fields["clientes"] = "";

                          fields["fecha"] = "";

                           fields["causa"] = "";

                            fields["comentarios"] = "";
          this.setState({fields:fields});
          alert("Formulario Limpo");
     }
    





    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

    



      if (!fields["descripcion"]) {
         var elemento = document.getElementById("descripcion");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["descripcion"] = "*Ingrese descripcion.";
       
     }
      else{

         var elemento = document.getElementById("descripcion");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";


         var elemento = document.getElementById("descripcion");
       elemento.className += "input-group   form-control col-lg-12";

      }






       if (!fields["cantidad"]) {
         var elemento = document.getElementById("cantidad");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["cantidad"] = "*Ingrese Cantidad de clientes afectados.";
       
     }
      else{

         var elemento = document.getElementById("cantidad");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";


         var elemento = document.getElementById("cantidad");
       elemento.className += "input-group   form-control col-lg-12";

      }


        if (!fields["boleto"]) {
         var elemento = document.getElementById("boleto");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["boleto"] = "*Ingrese boleto de referencia.";
       
     }
      else{

         var elemento = document.getElementById("boleto");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";


         var elemento = document.getElementById("boleto");
       elemento.className += "input-group   form-control col-lg-12";

      }



  if (!fields["tipo"]) {
         var elemento = document.getElementById("tipo");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["tipo"] = "*Ingrese tipo de clientes impactados.";
       
     }
      else{

         var elemento = document.getElementById("tipo");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";


         var elemento = document.getElementById("tipo");
       elemento.className += "input-group   form-control col-lg-12";

      }


 if (!fields["pueblos"]) {
         var elemento = document.getElementById("pueblos");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["pueblos"] = "*Ingrese pueblos afectados.";
       
     }
      else{

         var elemento = document.getElementById("pueblos");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";


         var elemento = document.getElementById("pueblos");
       elemento.className += "input-group   form-control col-lg-12";

      }


 if (!fields["zona"]) {
         var elemento = document.getElementById("zona");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["zona"] = "*Eliga zona o region impactada.";
       
     }
      else{
            var elemento = document.getElementById("zona");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("zona");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


 if (!fields["radio"]) {
         var elemento = document.getElementById("radio");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["radio"] = "*Ingrese Radio base.";
       
     }
      else{
            var elemento = document.getElementById("radio");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("radio");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }





 if (!fields["remotos"]) {
         var elemento = document.getElementById("remotos");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["remotos"] = "*Ingrese Remotos.";
       
     }
      else{
            var elemento = document.getElementById("remotos");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("remotos");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }



 if (!fields["dslams"]) {
         var elemento = document.getElementById("dslams");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["dslams"] = "*Ingrese dslams.";
       
     }
      else{
            var elemento = document.getElementById("dslams");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("dslams");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }

      
 if (!fields["vrads"]) {
         var elemento = document.getElementById("vrads");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["vrads"] = "*Ingrese vrads.";
       
     }
      else{
            var elemento = document.getElementById("vrads");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("vrads");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }



      if (!fields["efm"]) {
         var elemento = document.getElementById("efm");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["efm"] = "*Ingrese efm.";
       
     }
      else{
            var elemento = document.getElementById("efm");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("efm");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


      if (!fields["gpon"]) {
         var elemento = document.getElementById("gpon");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["gpon"] = "*Ingrese gpon.";
       
     }
      else{
            var elemento = document.getElementById("gpon");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("gpon");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


      if (!fields["cisco3800"]) {
         var elemento = document.getElementById("cisco3800");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["cisco3800"] = "*Ingrese cisco3800.";
       
     }
      else{
            var elemento = document.getElementById("cisco3800");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("cisco3800");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


       if (!fields["cisco24g"]) {
         var elemento = document.getElementById("cisco24g");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["cisco24g"] = "*Ingrese cisco24g.";
       
     }
      else{
            var elemento = document.getElementById("cisco24g");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("cisco24g");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }

      if (!fields["clientes"]) {
         var elemento = document.getElementById("clientes");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["clientes"] = "*Ingrese clientes.";
       
     }
      else{
            var elemento = document.getElementById("clientes");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("clientes");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }

      if (!fields["fecha"]) {
         var elemento = document.getElementById("fecha");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["fecha"] = "*Ingrese fecha.";
       
     }
      else{
            var elemento = document.getElementById("fecha");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("fecha");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


      if (!fields["causa"]) {
         var elemento = document.getElementById("causa");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["causa"] = "*Ingrese causa.";
       
     }
      else{
            var elemento = document.getElementById("causa");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("causa");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }


      if (!fields["comentarios"]) {
         var elemento = document.getElementById("comentarios");
       elemento.className += "input-group border border-danger  form-control col-lg-12";
        formIsValid = false;
        errors["comentarios"] = "*Ingrese comentarios.";
       
     }
      else{
            var elemento = document.getElementById("comentarios");
       elemento.className -= "input-group border border-danger  form-control col-lg-12";
          var elemento = document.getElementById("comentarios");
       elemento.className += "input-group  form-control col-lg-12";
        
        

      }



      this.setState({
        errors: errors
      });
      return formIsValid;


    }







    handleSubmit = event =>{
             function uniqueId(prefix) {
    var id = + new Date();
    return prefix ? prefix + id : id;
}
      event.preventDefault();
       if (this.validateForm()) {
          let fields = {numero:uniqueId()};

          
            fields["descripcion"] = "";


             fields["cantidad"] = "";
             fields["boleto"] = "";
              fields["tipo"] = "";
               fields["pueblos"] = "";
                fields["radio"] = "";
                 fields["remotos"] = "";
                  fields["dslams"] = "";
                   fields["vrads"] = "";
                    fields["efm"] = "";
                     fields["gpon"] = "";
                      fields["cisco3800"] = "";

                       fields["cisco24g"] = "";

                        fields["cisco3800"] = "";

                         fields["clientes"] = "";

                          fields["fecha"] = "";

                           fields["causa"] = "";

                            fields["comentarios"] = "";
          this.setState({fields:fields});
          let formIsValid = true;
          alert("Formulario Enviado");
     }
     else{
alert("Hay campos del formulario sin completar");

     }



    
      const url ='http://localhost:4000/nuevas_averias/add'
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




   

 handleChange(e) {

  
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
       this.setState({ [e.target.name]:e.target.value });

    }
  render() {


 
      
    return (
        <div className="container border border-secondary form-horizontal col-xs-1 col-sh-12 col-md-12 col-lg-12 ">
        


        <br />
          <form onSubmit={this.handleSubmit}>

          <br/><br/><br/>
          <h2>Formulario de Inicio de Averia</h2>
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
            <div className=" col-lg-8 float-left">
                 <div className="input-group">                
                <div className="col-lg-12">
                  <label htmlFor="" className="float-left">
                   <h6>Numero de Averia:</h6>
                  </label>
         
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
                    value={this.state.fields.descripcion}
                    
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
                     value={this.state.fields.cantidad}
                    
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
                     value={this.state.fields.boleto}
                    
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
                     value={this.state.fields.tipo}
                    
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
                     value={this.state.fields.pueblos}
                    
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
                          value={this.state.fields.zona}
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
                      value={this.state.fields.radio}
                    
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
                       value={this.state.fields.remotos}
                    
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
                       value={this.state.fields.dslams}
                    
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
                        value={this.state.fields.vrads}
                    
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
                       value={this.state.fields.efm}
                    
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
                       value={this.state.fields.gpon}
                    
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
                       value={this.state.fields.cisco3800}
                    
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
                       value={this.state.fields.cisco24g}
                    
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
                       value={this.state.fields.clientes}
                    
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
                     value={this.state.fields.fecha}
                    
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
                     value={this.state.fields.causa}
                    
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
                     value={this.state.fields.comentarios}
                    
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
               value="Enviar"
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
export default Inicio_averia;