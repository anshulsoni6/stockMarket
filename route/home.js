const express = require('express');
const router = express.Router();
const googleStocks = require('google-stocks');



// googleStocks(['TSE:WJA', 'NASDAQ:GOOG', 'AAPL'], function(error, data) {
//   console.log(data);
// });

router.get('/home', async function (req, res) {

    let company = JSON.parse(req.query.company);
    let data = await googleStocks(['ASHOKLEY'], function (error, data) {
        console.log(data);
        //  res.send(data[0].l);
    });
    res.sendFile('production/index.html', { root: './' });
});

// // router.get('/form', async function (req, res) {

// //     let company = JSON.parse(req.query.company);
// //     let data = await googleStocks(['ASHOKLEY'], function (error, data) {
// //         console.log(data);
// //         //  res.send(data[0].l);
// //     });
//     res.sendFile('production/form.html', { root: './' });
// });
module.exports = router;