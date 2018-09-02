const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
//pool of conections
var pool        = mysql.createPool({
    connectionLimit : 100, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'sincosoft'
});
// Initialize the app
const app = express()
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true})); 
//access cors  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });


// part of alumnos


//get alumnos
app.get('/getAlumnos', function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from alumnos", function (err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
    });
});
//insert alumnos
app.post('/createAlumnos', function (req, res) {
 pool.getConnection(function (err, connection) {	
    connection.query('INSERT INTO alumnos SET ?', req.body, function (err, result) {
    		 connection.release();
            if (err) throw err;
            res.send(JSON.stringify('Alumno insertado'));
        }
    );
   });
});

//update alumnos
app.put('/updateAlumnos', function (req, res) {
 pool.getConnection(function (err, connection) {
   connection.query('UPDATE alumnos SET nombre=?, apellido=? , direccion=? , telefono=? , curso=? , documento=? where id=?', [req.body.nombre,req.body.apellido,req.body.direccion,req.body.telefono,req.body.curso,req.body.documento, req.body.id], function (err, result) {
    connection.release();
     if (error) throw error;
      res.send(JSON.stringify('Alumno actualizado'));
     });
  });
});

//delete alumnos
app.delete('/deleteAlumnos', function (req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('DELETE FROM alumnos WHERE id=?', [req.body.id], function (err, result) {
     connection.release();	
     if (error) throw error;
     res.send('alumno eliminado!');
   });
 });
});
//


// part of profesores
//get profesores
app.get('/getProfesores', function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from profesores", function (err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
    });
});
//insert profesores
app.post('/createProfesores', function (req, res) {
 pool.getConnection(function (err, connection) {    
    connection.query('INSERT INTO profesores SET ?', req.body, function (err, result) {
             connection.release();
            if (err) throw err;
            res.send(JSON.stringify('Profesor insertado'));
        }
    );
   });
});

//update profesores
app.put('/updateProfesores', function (req, res) {
 pool.getConnection(function (err, connection) {
   connection.query('UPDATE profesores SET nombre=?, apellido=? , direccion=? , telefono=? , documento=? where id=?', [req.body.nombre,req.body.apellido,req.body.direccion,req.body.telefono,req.body.documento, req.body.id], function (err, result) {
    connection.release();
     if (error) throw error;
      res.send(JSON.stringify(result));
     });
  });
});

//delete profesores
app.delete('/deleteProfesores', function (req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('DELETE FROM profesores WHERE id=?', [req.body.id], function (err, result) {
     connection.release();  
     if (error) throw error;
     res.send('profesor eliminado!');
   });
 });
});
//



// part of materias
//get materias
app.get('/getMaterias', function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from materias", function (err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
    });
});
//insert materias
app.post('/createMaterias', function (req, res) {
 pool.getConnection(function (err, connection) {    
    connection.query('INSERT INTO materias SET ?', req.body, function (err, result) {
             connection.release();
            if (err) throw err;
            res.send(JSON.stringify('Materia insertada'));
        }
    );
   });
});

//update materias
app.put('/updateMaterias', function (req, res) {
 pool.getConnection(function (err, connection) {
   connection.query('UPDATE materias SET nombre=?, descripcion=? , alumnos_id=? , profesores_id=?  where id=?', [req.body.nombre,req.body.descripcion,req.body.alumnos_id,req.body.profesores_id, req.body.id], function (err, result) {
    connection.release();
     if (error) throw error;
      res.send(JSON.stringify(result));
     });
  });
});

//delete materias
app.delete('/deleteMaterias', function (req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('DELETE FROM materias WHERE id=?', [req.body.id], function (err, result) {
     connection.release();  
     if (error) throw error;
     res.send('Materia eliminada!');
   });
 });
});
//

//part of notas

//get notas
app.get('/getNotas', function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from notas", function (err, rows) {
            connection.release();
            if (err) throw err;
            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
    });
});
//insert notas
app.post('/createNotas', function (req, res) {
 pool.getConnection(function (err, connection) {    
    connection.query('INSERT INTO notas SET ?', req.body, function (err, result) {
             connection.release();
            if (err) throw err;
            res.send(JSON.stringify('Nota insertada'));
        }
    );
   });
});

//update notas
app.put('/updateNotas', function (req, res) {
 pool.getConnection(function (err, connection) {
   connection.query('UPDATE notas SET valor=?, fecha=? , materias_id=?   where id=?', [req.body.valor,req.body.fecha,req.body.materias_id, req.body.id], function (err, result) {
    connection.release();
     if (error) throw error;
      res.send(JSON.stringify(result));
     });
  });
});

//delete notas
app.delete('/deleteNotas', function (req, res) {
  pool.getConnection(function (err, connection) {
    connection.query('DELETE FROM notas WHERE id=?', [req.body.id], function (err, result) {
     connection.release();  
     if (error) throw error;
     res.send('Nota eliminada!');
   });
 });
});
//





// Start the server
app.listen(3000, () => {
 console.log('El backend se inicializo en http://localhost:3000/ ');
});