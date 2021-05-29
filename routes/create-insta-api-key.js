const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
  res.render('create-insta-api-key', { title: 'create-insta-api-key' });
});

router.post('/', function (req, res, next) {
  const appId = req.body.appId;
  const appSecret = req.body.appSecret;
  const firstAccsessToken = req.body.firstAccsessToken;
  console.log(appId);
  console.log(appSecret);
  console.log(firstAccsessToken);
  res.header('Content-Type', 'application/json; charset=utf-8')
  // res.send(responseDataJson);
  res.send(ok);
});

module.exports = router;
