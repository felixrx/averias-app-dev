
 async handleSubmit (event){
        
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

      this.setState({results:data})
      console.log(data)
    })
 




}
    