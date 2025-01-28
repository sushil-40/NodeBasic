import express from "express";
import path from "path";

const app = express();
const PORT = 8000;

const __dirname = path.resolve();
console.log(__dirname, "========");
// app.get("/", (req, res, next) => {
//   console.log(req);

//   console.log("We got the request");

//   // res.send("From the server");
//   res.send(
//     "  <h1>hello Server Dev</h1> <hr/><p>lorem Ipsum test Hello lorem lorem ipsum dollar imposum</p>"
//   );
// });

// home controller
app.get("/", (req, res) => {
  // res.sendFile(
  //   "/Users/grays/OneDrive/Documents/Dev/Node-2025/user app/src/html/index.html"
  // );
  console.log("req received");
  res.sendFile(__dirname + "/src/html/index.html");
});

// user registration controller
app.get("/register", (req, res) => {
  console.log("req received register");
  res.sendFile(__dirname + "/src/html/index.html");
});
// user Login Controller
app.get("/login", (req, res) => {
  console.log("req received login");
  res.sendFile(__dirname + "/src/html/index.html");
});
// app.get("/api/v1/get-user", (req, res) => {
//   res.json({
//     fName: "Sushil",
//     lName: "Dangoriya",
//   });
// });
//serve static file from the public directories

app.use(express.static(__dirname + "/public"));
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
