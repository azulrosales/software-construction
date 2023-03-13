const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'students',
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Define route to display data
app.get('/', (req, res) => {
  const query = 'SELECT * FROM students';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.render('index.ejs', { students: results });
  });
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Modify a row in the table
app.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const major = req.body.major;

  const query = `UPDATE student_data SET name = ?, age = ?, major = ? WHERE id = ?`;
  const values = [name, age, major, id];
  connection.query(query, values, (err, result) => {
    if (err) throw err;
    res.send(`Modified ${result.affectedRows} rows`);
  });
});

// Insert new data into the table
app.post('/students', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const major = req.body.major;

  const query = `INSERT INTO student_data (name, age, major) VALUES (?, ?, ?)`;
  const values = [name, age, major];
  connection.query(query, values, (err, result) => {
    if (err) throw err;
    res.send(`Inserted ${result.affectedRows} rows`);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
