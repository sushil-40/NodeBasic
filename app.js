import express from "express";
import path from "path";

const app = express();

const PORT = 8000;
const __dirname = path.resolve();

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

//serve static file from the public directories
app.use(express.static(__dirname + `/public`));

app.use(express.urlencoded({ extended: true }));
// home controller
app.get("/", (req, res) => {
  res.sendFile(__dirname + `/src/html/index.html`);
});

//login controller
app.get("/login", (req, res) => {
  res.sendFile(__dirname + `/src/html/login.html`);
});

//registration controller
app.get("/register", (req, res) => {
  console.log(req.query);
  res.sendFile(__dirname + `/src/html/register.html`);
});
app.post("/register", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + `/src/html/register.html`);
});

// app.get("/api/v1/get-users", (req, res) => {
//   res.json({
//     fName: "Sushil",
//     lName: "Dangoriya",
//   });
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`You are running at http://localhost:${PORT}`);
});
