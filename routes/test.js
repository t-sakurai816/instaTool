var express = require('express');
var router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/test にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function (req, res, next) {
  var param = { "text": "testやでー" };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

router.post('/', function (req, res, next) {
  var param = { "comment": "okやでー" };
  console.log(req.body)
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

/* GET home page. */
router.get('/test2', function (req, res, next) {
  res.render('test2');
});


module.exports = router;