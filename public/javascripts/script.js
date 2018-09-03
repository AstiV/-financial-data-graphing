let apiUrl = "http://api.coindesk.com/v1/bpi/historical/close.json";
drawChart(apiUrl);

$("input").on("change", function() {
    let start = $("#start").val();
    let end = $("#end").val();
    if (start && end) {
        apiUrl = "http://api.coindesk.com/v1/bpi/historical/close.json?start=" + start + "&end=" + end;
        drawChart(apiUrl);
    }
});

function drawChart(apiUrl) {
    axios.get(apiUrl).then(result => {
        // console.log(Object.keys(result.data.bpi), Object.values(result.data.bpi));
        const dates = Object.keys(result.data.bpi);
        const values = Object.values(result.data.bpi);

        var ctx = document.getElementById("myChart").getContext("2d");
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: dates,
                datasets: [
                    {
                        label: "$",
                        data: values,
                        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                        borderColor: ["rgba(255,99,132,1)"],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true
            }
        });
    });
}
