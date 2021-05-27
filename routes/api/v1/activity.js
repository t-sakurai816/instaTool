const express = require('express');
const dayjs = require('dayjs');
const router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/api/v1/activity にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function (req, res, next) {
  const param = { "text": "API okやでー" };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

router.post('/', function (req, res, next) {
  // 送られてきたdata(=req.body)を代入する
  // 日付けの計算
  const startDate = dayjs(req.body.startDate);
  const endDate = dayjs(req.body.endDate);
  let labelsDateArray = [];
  for (let date = startDate; date <= endDate; date = date.add(1, 'day')) {
    labelsDateArray.push(date.format('YYYY-MM-DD'))
  }

  const responseDataJson = { "labelsDateArray": labelsDateArray };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(responseDataJson);
});



module.exports = router;