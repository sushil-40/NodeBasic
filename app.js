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

app.get("/", (req, res) => {
  // res.sendFile(
  //   "/Users/grays/OneDrive/Documents/Dev/Node-2025/user app/src/html/index.html"
  // );

  res.sendFile(__dirname + "/src/html/index.html");
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
