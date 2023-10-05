// To start backend server:
// mysql.server start
// npm start


import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Youcan@cal1319',
    database: "test",
})

// If there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Youcan@cal1319';

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to MySQL server');
  });
  

app.get("/",(req,res)=>{
    res.json("Hello, this is the backend la")
})

app.get("/problems", (req, res)=>{
    const q = "SELECT * FROM problems"
    db.query(q,(err,data)=>{ 
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/problems", (req,res)=>{
    const q = "INSERT INTO problems (`statement`,`name`,`email`) VALUES (?)"
    const values = [
        req.body.statement,
        req.body.name, 
        req.body.email
    ];
    db.query(q, [values],(err, data)=>{
        if (err) return res.json(err);
        return res.json("Book has been created successfully");
    });
})


app.delete("/problems/:id", (req, res)=>{
    const problemId = req.params.id;
    const q = "DELETE FROM problems WHERE id = ?" 

    db.query(q, [problemId],(err, data)=>{
        if (err) return res.json(err);
        return res.json("Book has been deleted successfully");
    });
})

app.put("/problems/:id", (req, res)=>{
    const problemId = req.params.id;
    const q = "UPDATE problems SET `statement` = ?, `name`= ?, `email`=? WHERE id = ?"; 

    const values = [
        req.body.statement,
        req.body.name, 
        req.body.email
    ];
     
    db.query(q, [...values, problemId],(err, data)=>{
        if (err) return res.json(err);
        return res.json("Book has been updated successfully");
    });
})

app.listen(5000, ()=>{
    console.log('Connected to backend! Server is running on http://localhost:5000')
} )