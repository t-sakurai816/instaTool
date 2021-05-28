const express = require('express');
const app = express();
const router = express.Router();
const env = require('./../env.json')[app.get('env')];
const request = require('request');

router.get('/', function (req, res, next) {
  // URLからaccoundNameを読み込む
  const accountName = req.query.accountName;
  console.log("アカウント名：" + accountName);
  // アカウント名が存在しているかどうか
  if (Object.keys((env.account)).includes(accountName)) {//true
    const URL = "https://graph.facebook.com/v10.0/" + env.account[accountName].accountId + "?fields=business_discovery.username(" + accountName + "){followers_count,media_count}&access_token=" + env.account[accountName].accessToken
    const options = {
      url: URL,
      method: 'GET'
    }
    request(options, function (error, response, body) {
      const responseBody = JSON.parse(body);
      const postNowNum = responseBody.business_discovery.media_count;
      const followerNowNum = responseBody.business_discovery.followers_count;

      res.render('followers', {
        accountName: accountName,
        post: {
          nowNum: postNowNum,
          previousMonthOverNum: 'XX'
        },
        follower: {
          nowNum: followerNowNum,
          previousMonthOverNum: 'XXX'
        },
        likes: {
          nowNum: 'XX',
          previousMonthOverNum: 'X'
        },
        comment: {
          nowNum: 'XXX',
          previousMonthOverNum: 'XX'
        },
        engagement: {
          nowNum: 'X.XX',
          previousMonthOverNum: 'X.XX'
        }
      });
    });
  } else {
    res.send('アカウント名が存在しません');
  };

})

module.exports = router;
