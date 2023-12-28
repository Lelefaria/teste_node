"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    res.render('home');
});
router.get('/sobre', function (req, res) {
    res.send('Pagina Institucional ');
});
router.get('/contatos', function (req, res) {
    res.send('instagram e facebook ');
});
exports.default = router;
