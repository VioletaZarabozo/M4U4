var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('admin/novedades', {
	layout: 'admin/layout',
	nombre: req.session.nombre,
	mail: req.session.mail,
	});
});

module.exports = router;