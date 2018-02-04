const express = require('express');
const router = express.Router();
const googleStocks = require('google-stocks');
const Company = require('../model/company');

// router.get('/form', async function (req, res) {

//     res.sendFile('production/form.html', { root: './' });
// });

router.post('/submitForm', async function (req, res) {
    try {
        let body = req.body;
        let companySymbol = body['companySymbol[]'];
        let buyPrice = body['buyPrice[]'];
        let data = [];
        if (companySymbol && buyPrice) {
            for (let i = 0; i < companySymbol.length; i++) {
                data[i] = {
                    companySymbol: companySymbol[i],
                    buyPrice: buyPrice[i]
                };

            }

            await Company.insertMany(data);
        } else {
            res.sendFile('production/form.html', { root: './' });
        }

        res.sendFile('production/index.html', { root: './' });
    } catch (err) {
        console.log(err);
        res.sendFile('production/error.html', { root: './' });
    }

});

module.exports = router;