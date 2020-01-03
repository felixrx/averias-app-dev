
import React from 'react';
import "./inicio_averia";



   function  validateForm () {

      let fields = this.Inicio_averia.state.fields;
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
        errors["vrads"] = "*Ingrese dslams.";
       
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
        errors["efm"] = "*Ingrese dslams.";
       
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
        errors["gpon"] = "*Ingrese dslams.";
       
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
        errors["cisco3800"] = "*Ingrese dslams.";
       
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
        errors["cisco24g"] = "*Ingrese dslams.";
       
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
        errors["clientes"] = "*Ingrese dslams.";
       
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
        errors["fecha"] = "*Ingrese dslams.";
       
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
        errors["causa"] = "*Ingrese dslams.";
       
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
        errors["comentarios"] = "*Ingrese dslams.";
       
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



export default validateForm;