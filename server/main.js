const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
var app = express();
//Configuring express server
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
	host: "localhost",
	user: "andrew",
	password: "Qwerty!23",
	database: "db1",
	multipleStatements: true,
});

mysqlConnection.connect((err) => {
	if (!err) console.log("Connection Established Successfully");
	else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

//Establish the server d connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));

app.get("/todo", (req, res) => {
	mysqlConnection.query(
		//"SELECT * FROM todo;"
		"SELECT	id, title, IF(completed, cast(TRUE as json), cast(FALSE as json)) completed FROM todo;",
		(err, rows, fields) => {
			if (!err) {
				console.log(rows);
				res.send(rows);
			} else console.log(err);
		}
	);
	// res.send('[{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }]');
	// if(completed, cast(TRUE as json), cast(FALSE as json))
});

//Router to GET specific learner detail from the MySQL database
app.get("/todo/:id", (req, res) => {
	mysqlConnection.query(
		"SELECT * FROM todo WHERE id = ?",
		[req.params.id],
		(err, rows, fields) => {
			if (!err) res.send(rows);
			else console.log(err);
		}
	);
});

//Router to INSERT/POST a learner's detail
// app.post("/todo", (req, res) => {
// 	let todo = req.body;
// 	var sql =
// 		"SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
// 	mysqlConnection.query(
// 		sql,
// 		[
// 			learner.learner_id,
// 			learner.learner_name,
// 			learner.learner_email,
// 			learner.course_Id,
// 		],
// 		(err, rows, fields) => {
// 			if (!err)
// 				rows.forEach((element) => {
// 					if (element.constructor == Array)
// 						res.send("New Learner ID : " + element[0].learner_id);
// 				});
// 			else console.log(err);
// 		}
// 	);
// });

// //Router to UPDATE a learner's detail
// app.put("/learners", (req, res) => {
// 	let learner = req.body;
// 	var sql =
// 		"SET @learner_id = ?;SET @learner_name = ?;SET @learner_email = ?;SET @course_Id = ?; CALL learnerAddOrEdit(@learner_id,@learner_name,@learner_email,@course_Id);";
// 	mysqlConnection.query(
// 		sql,
// 		[
// 			learner.learner_id,
// 			learner.learner_name,
// 			learner.learner_email,
// 			learner.course_Id,
// 		],
// 		(err, rows, fields) => {
// 			if (!err) res.send("Learner Details Updated Successfully");
// 			else console.log(err);
// 		}
// 	);
// });
