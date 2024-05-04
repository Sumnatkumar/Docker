const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([{
            id: 1,
            name: "anil kumar sidhu",
            age: 20
        }, {
            id: 2,
            name: "Sunil sidhu",
            age: 39
        },
        {
            id: 3,
            name: "Umesh kumar sidhu",
            age: 55
        },
        {
            id: 4,
            name: "tony stark",
            age: 34
        }
    ])
});
app.listen(5500, () => {
    console.log("app is running on 5500 port")
})