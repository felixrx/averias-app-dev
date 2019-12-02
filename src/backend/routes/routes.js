// JSON data
const pool = require('../data/config');

// Router

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

   app.get('/nuevas_averias', (request, response) => {
    pool.query('SELECT * FROM nuevas_averias', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});


app.post('/nuevas_averias/add', (request, response) => {
    pool.query('INSERT INTO nuevas_averias SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});


}

// Export the router
module.exports = router;
