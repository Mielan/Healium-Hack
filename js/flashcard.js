var flag = 1;

var id = 0;
var js=
{
    "transactionId": "d0b13e9b-2a5c-4128-ae37-ad09c86bdcaf",
        "live": false,
            "visitor": {
        "metrics": {
            "Weeks since first visit": 1.0,
            "Total referred visits": 1.0,
            "Total time spent on site in minutes": 0.3,
            "Average visits per week": 1.0,
            "PDP Pageviews - Visitor": 2.0,
            "Total Time in Min / Weeks Since First Visit": 0.0,
            "Orders - Last 30 Days": 0.0,
            "Lifetime visit count": 1.0,
            "Lifetime Sale Views": 1.0,
            "Average visit duration in minutes": 0.3,
             "Lifetime event count": 3.0,
             "Orders - Last 60 Days": 0.0,
             "Category Page Views - Visitor": 2.0
        },
        "dates": {
            "Last visit": 1566087191000,
                "last_visit_start_ts": 1566087173000,
                    "audience_tealiumlabs-hackathon_sd-aug-2019-036_129_count_ts": 1566087191013,
                        "audience_tealiumlabs-hackathon_sd-aug-2019-036_106_count_ts": 1566087173131,
                            "audience_tealiumlabs-hackathon_sd-aug-2019-036_124_count_ts": 1566088994879,
                                "audience_tealiumlabs-hackathon_sd-aug-2019-036_121_count_ts": 1566087173131,
                                    "Last Visit Date": 1566088994879,
                                        "First visit": 1566087173000,
                                            "audience_tealiumlabs-hackathon_sd-aug-2019-036_113_count_ts": 1566087173131
        },
        "properties": {
            "Count Product (URL) (favorite)": "http://www.tealiumecommerce.com/women/new-arrivals.html",
                "Lifetime browser versions used (favorite)": "Chrome",
                    "PDP Category Viewed - Most Recent": "Sale",
                        "Lifetime browser types used (favorite)": "Chrome",
                            "profile": "sd-aug-2019-036",
                                "Lifetime devices used (favorite)": "Mac desktop",
                                    "Category (favorite)": "Sale",
                                        "Lifetime platforms used (favorite)": "browser",
                                            "Adobe ID": "3BD4847EBD7FBC01-0517EF8537B7C396",
                                                "Product URL": "http://www.tealiumecommerce.com/sale.html",
                                                    "Active Device type (favorite)": "Mac desktop",
                                                        "Last event URL": "http://www.tealiumecommerce.com/sale.html",
                                                            "account": "tealiumlabs-hackathon",
                                                                "Visitor utag_main_v_id": "016ca211d2830046422b627dd7980307800200700093c",
                                                                    "Lifetime operating systems used (favorite)": "Mac OS X"
        },
        "flags": {
            "Order Complete": false,
                "Add to Cart": false,
                    "Paid Search": false
        },
        "audiences": [
            "Adobe Visitor Update",
            "Abandoners - Browse",
            "Every Event",
            "All Users - For Splunk",
            "Visitors - Unknown"
        ],
            "badges": [
                "Sale Fan",
                "Visitor - Unknown",
                "Browse Abandoner"
            ],
                "property_sets": {
            "Top 3 Product Categories": [
                "Sale",
                "New Arrivals"
            ]
        },
        "metric_sets": {
            "Lifetime operating systems used": {
                "Mac OS X": 1.0
            },
            "Category": {
                "Sale": 1.0,
                    "New Arrivals": 1.0
            },
            "Active Device type": {
                "Mac desktop": 3.0
            },
            "Lifetime devices used": {
                "Mac desktop": 1.0
            },
            "Lifetime browser versions used": {
                "Chrome": 1.0
            },
            "Count Product (URL)": {
                "http://www.tealiumecommerce.com/women/new-arrivals.html": 1.0
            },
            "Lifetime browser types used": {
                "Chrome": 1.0
            },
            "Lifetime platforms used": {
                "browser": 1.0
            }
        },
        "last_visit_id": "dc190425e4087a7af77c8b4a7e70777625207669a0de950e61dd93f6939b0d30"
    }
}

var charValue1;
charValue1= js.metrics["Weeks since first visit"];

var chartName = [
    "Women Views",
    "Men Views",
    "Accessories Views",
    "Home & Decor Views",
    "Sale Views",
    "Weeks between Views",
    "Purchase Views",
];
var chartValue = [
    13,
    34,
    35,
    67,
    23,
    45,
    56,
    67
];

var myMap = new Map();
myMap.set(34, "Women Views");
myMap.set(13, "Men Views");
myMap.set(13, "Accessories Views");
myMap.set(40, "Home & Decor Views");
myMap.set(37, "Sale Views");

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function updateScale() {
    
    //chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10, name: "A" });
    var i = Math.floor(Math.abs(Math.random() * 6));
    var nameS = chartName[i];
    var valueC = chartValue[i];
    chart.options.data[0].dataPoints[i] = { y: valueC, name: nameS };
    alert(charValue1);
    chart.render();
}

function randomId() {
    var length = dataData.length;
    id = Math.floor(Math.random() * length);
}

function next() {
    randomId();
    flag = 0;
    toFront();
}

function toFront() {
    if (flag === 1) {
        var answer = dataData[id].split(", ")[1];
        document.getElementById('term').innerHTML = "Answer: " + answer;
        flag = 0;
    } else {
        var question = dataData[id].split(", ")[0];
        document.getElementById('term').innerHTML = "Question: " + question;
        flag = 1;
    }
}

function showAnswer(input) {
    var question = input.split(", ")[0];
    var answer = input.split(", ")[1];
    document.getElementById("textbox").innerHTML = question;
    document.getElementById("answerbox").innerHTML = answer;
}

function setdefault() {
   
    document.getElementById("textbox").innerHTML = "";
    document.getElementById("answerbox").innerHTML = "";
}