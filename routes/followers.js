const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('followers', {
    accountName: 'test_t.saku',
    post: {
      nowNum: '39',
      previousMonthOverNum: '8'
    },
    follower: {
      nowNum: '4002',
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

module.exports = router;
