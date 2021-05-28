const express = require('express');
const app = express();
const router = express.Router();
const env = require('./../../../env.json')[app.get('env')];
const request = require('request');

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


// アカウント名をPOSTすると、現在のフォロー数と投稿数を返す
router.post('/get-num', function (req, res, next) {
  const accountName = req.body.accountName;
  const URL = "https://graph.facebook.com/v10.0/" + env.account[accountName].accountId + "?fields=business_discovery.username(" + accountName + "){followers_count,media_count}&access_token=" + env.account[accountName].accessToken;

  const options = {
    url: URL,
    method: 'GET'
  };
  request(options, function (error, response, body) {
    const responseBody = JSON.parse(body);
    const NowNumJson = {
      "postNowNum": responseBody.business_discovery.media_count,
      "followerNowNum": responseBody.business_discovery.followers_count
    };
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(NowNumJson);
  });
})


module.exports = router;