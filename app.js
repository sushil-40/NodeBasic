import express from "express";
import path from "path";

import fs from "fs";

import { makeHtmlString } from "./src/fileMerger.js";

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
  fs.readFile(fileName, "utf8", (error, data) => {
    if (error) {
      res.sendFile(__dirname + `/src/html/index.html`);
    } else {
      console.log(data.split("\n"));
      res.send(makeHtmlString(data.split("\n")));
    }
  });
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

const fileName = "userList.csv";
app.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const str = `${name}, ${email}, ${password} \n`;
  console.log(str.split(","));

  //create and write file

  fs.appendFile(fileName, str, (error) => {
    error ? res.send(error.message) : res.redirect("/");
    // : res.send(
    //     `<h1 class="alert alert-success">User account created successfully. You may login now!🫠</h1>`
    //   );
  });

  // res.sendFile(__dirname + `/src/html/register.html`);
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
