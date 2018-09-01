const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index", { title: "Express" });
});

module.exports = router;

// axios.get("https://api.iextrading.com/1.0/stock/amzn/chart").then(result => {
//     console.log(result.data);
//     const days = result.data.map(el => el.label);
//     const values = result.data.map(el => el.close);
//     var ctx = document.getElementById("myChart").getContext("2d");
//     var myChart = new Chart(ctx, {
//         type: "line",
//         data: {
//             labels: days,
//             datasets: [
//                 {
//                     label: "Amazon Stock Data",
//                     data: values,
//                     backgroundColor: ["rgba(255, 99, 132, 0.2)"],
//                     borderColor: ["rgba(255,99,132,1)"],
//                     borderWidth: 1
//                 }
//             ]
//         },
//         options: {}
//     });
// });
