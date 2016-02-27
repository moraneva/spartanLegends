/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var company = require('../repository/company');

router.get('/', function (req, res) {

    company.getCompanies(function (err, docs) {

        if (err != -1) {

            res.send(docs);
        } else {

            res.status(500).send({error: 'database query failed'});
        }
    });


});

router.get('/:name', function (req, res) {

    company.getCompany(req.params.name, function (err, document) {

        if (err != -1) {

            res.send(document);
        } else {

            res.status(500).send({error: 'database query failed'});
        }
    });
});

module.exports = router;