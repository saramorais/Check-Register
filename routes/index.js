var express = require('express');
var router = express.Router();
const budgetController = require('../controllers').budget;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/budget', budgetController.list);
router.post('/api/budget', budgetController.add);
router.get('/api/filter/:term', budgetController.filter);

module.exports = router;
