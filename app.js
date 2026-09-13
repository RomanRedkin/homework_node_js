import express from "express"

import moment from "moment"

const app = express()

const HOST = '127.0.0.1';
const PORT = 3235;
const PORT1 = 3435;

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "ok" 
    });
});

app.get('/stats', (req, res) => {
    res.status(200).json({
        "uptime": process.uptime(),
        "nodeVersion": process.version,
        "timestamp": moment().format()
    });
});

app.listen(PORT, HOST, () => {
    console.log(`http://${HOST}:${PORT}/health`)
})

app.listen(PORT1, HOST, () => {
    console.log(`http://${HOST}:${PORT1}/stats`)
})











app.get('/timestamp', (req, res) => {
    function getCurrentDate() {
        return moment().format("MMMM Do YYYY");
    }
    res.json({
        name: getCurrentDate()
    })
})

app.listen(2323, () => {
    console.log('Server is running on /timestamp:2323')
})



// // 1.
// function getCurrentDay() {
//     console.log(moment().format('dddd'));
// }

// // 2.
// function getCurrenMonth() {
//     console.log(moment().format('MMMM'));
// }

// // 3.
// function getCurrentYear() {
//     console.log(moment().format('YYYY'));
// }

// // 4.
// function getCurrentDate() {
//     console.log(moment().format("MMMM Do YYYY"));
// }

// // 5.
// function isWeekend() {
//     const dayOfWeek = moment().day();
//     if (dayOfWeek === 0 || dayOfWeek === 6) {
//         console.log("Today is a weekend");
//     } else{
//         console.log("Today is a weekday");
//     }
// }

// // 6.
// function getDaysUntilNewYear() {
//     const a = moment().startOf('day');
//     const b = moment().endOf('year');  
//     const daysLeft = b.diff(a, 'days')
//     console.log(`${daysLeft} days until New Year`);
// }

// // 7.
// function getAge() {
//     const a = moment();
//     const b = moment([2010, 5, 23]);
//     const age = a.diff(b, 'year'); 
//     console.log(`You are ${age} years old`);
// }
