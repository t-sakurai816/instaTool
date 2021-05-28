const express = require('express');
const app = express();
const router = express.Router();
const env = require('./../env.json')[app.get('env')];
const request = require('request');

// TODO:どこかでaccountNameを取得する
const accountName = "test_t.saku";
const URL = "https://graph.facebook.com/v10.0/" + env.account[accountName].accountId + "?fields=business_discovery.username(" + accountName + "){followers_count,media_count}&access_token=" + env.account[accountName].accessToken

router.get('/', function (req, res, next) {
  const options = {
    url: URL,
    method: 'GET'
  }
  request(options, function (error, response, body) {
    const responseBody = JSON.parse(body);
    const postNowNum = responseBody.business_discovery.media_count;
    const followerNowNum = responseBody.business_discovery.followers_count;
    console.log(postNowNum);

    res.render('followers', {
      accountName: accountName,
      post: {
        nowNum: postNowNum,
        previousMonthOverNum: '8'
      },
      follower: {
        nowNum: followerNowNum,
        previousMonthOverNum: '300'
      },
      likes: {
        nowNum: '50',
        previousMonthOverNum: '7'
      },
      comment: {
        nowNum: '389',
        previousMonthOverNum: '83'
      },
      engagement: {
        nowNum: '5.42',
        previousMonthOverNum: '0.78'
      }
    });
  });
})

module.exports = router;
