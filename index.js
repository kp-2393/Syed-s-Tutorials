const express = require("express");
const bodyPaser = require("body-parser");
const db = require("./db.js");
const { json } = require("body-parser");

const app = express();
app.use(bodyPaser.json());

app.get("/", (req, res) => {
    res.json({
        error: false,
        message: `App is running...`
    })
})

app.get("/allStudents", (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * from students`, (error, rows) => {
            if(error){
                res.json({
                    status: false,
                    error: error
                })
            }else{
                res.json({
                    status: true,
                    students: rows
                })
            }
        })
    })
})

app.get("/teacher", (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * from Teacher`, (error, rows) => {
            if(error){
                res.json({
                    status: false,
                    error: error
                })
            }else{
                res.json({
                    status: true,
                    teachers: rows
                })
            }
        })
    })
})

app.get("/frontEnd", (req, res) => {
    db.serialize(() => {
        db.all(`SELECT * from frontEnd`, (error, rows) => {
            if(error){
                res.json({
                    status: false,
                    error: error
                })
            }else{
                res.json({
                    status: true,
                    teachers: rows
                })
            }
        })
    })
})

app.listen(3000, () => {
    console.log(`App is running on port http://localhost:3000`)
})