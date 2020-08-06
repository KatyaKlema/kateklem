const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const config = require("config");
const users = require("./users/index");

const ENV = config.get("ENV");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use(express.static("client/build"));

require("./passport-setup");

app.use(
    cookieSession({
        name: "airtable-app-session",
        keys: ["key1", "key2"],
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/failed", (req, res) => res.send("login failure"));
app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account",
    })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/failed" }),
    async (req, res) => {
        const userList = await users.getUserList();
        const indexUser = users.getUserIndex(req.user.email, userList);
        if (indexUser > 0) {
            console.log(userList[indexUser]);
            req.user.rights = userList[indexUser]["rights"];
            req.user.unit = userList[indexUser]["unit"];
            req.user.role = userList[indexUser]["role"];
            res.redirect("/");
            req.session.valid = true;
        } else {
            req.logout();
            res.sendStatus(401);
        }
    }
);

app.get("/checkUser", (req, res) => {
    if (ENV === "dev") {
        res.send({
            email: "vanya71310@gmail.com",
            name: "Dev server",
            unit: "Customer success",
            role: "SMM",
            rights: "Admin",
        });
    } else {
        if (req.user) {
            console.log(req.user);
            res.send(req.user);
        } else {
            res.sendStatus(401);
        }
    }
});

app.get("/logout", (req, res) => {
    req.session = null;
    req.logout();
    res.redirect("/");
});

// app.use("/airtables/", require("./routes/airtable"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.redirect("/");
});

app.listen(3001, () => console.log(`App has been started...`));
module.exports = app;
