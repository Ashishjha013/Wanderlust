const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session configuration
const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

// Middleware to parse JSON bodies
app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next()
});

// Middleware to log requests
app.get("/register", (req, res) => {
  // Extract the name from query parameters
  let { name = "anonymous" } = req.query;
  // Store the name in the session
  req.session.name = name;
  // Set flash messages based on the name
  if (name === "anonymous") {
    req.flash("error", "User is not registered");
  } else {
    req.flash("success", "You have registered successfully.");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You sent request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
//   res.send("Test successful!");
// })

// Start the server
app.listen(3000, () => {
  console.log("Server is listening to 3000");
});
