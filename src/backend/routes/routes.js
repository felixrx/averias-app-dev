// JSON data
const pool = require('../data/config');

// Router

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

 

   app.get('/buscar_averias/', function(req, res, next) {
    pool.query('select * from nuevas_averias', function (error, results, fields) {
        if(error) throw error;
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    next();
        res.send(results);
    });
});


app.post('/nuevas_averias/add', (request, response) => {
    pool.query('INSERT INTO nuevas_averias SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201);

    });
});



app.post ('/api/productos/',(req, res,next ) =>{

    let sql = "select * from nuevas_averias where numero = "+req.body.numero;
    let query = pool.query(sql, (err,results)=> {
        if (err) throw err ;
           res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    next();
            res.send(JSON.stringify({results}));
    });
});



app.put('/api/actualizarAveria/',(req, res, next)=>{


    let sql = "UPDATE nuevas_averias SET descripcion ='"+re.body.descripcion+"' WHERE numero="+req.body.numero;
let query = pool.query(sql, (err,results)=> {
        if (err) throw err ;
           res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    next();
            res.send(JSON.stringify({results}));
    });

});


app.post('/buscar_averias/', function(req, res, next) {
    pool.query('select * from nuevas_averias where numero = '+req.body.numero+'', function (error, results, fields) {
        if(error) throw error;

         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    next();
         res.send(JSON.stringify({"status":200, "error" :null,"response":results}));
       
    });
});



}

// Export the router
module.exports = router;
