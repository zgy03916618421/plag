/**
 * Created by Administrator on 2016/9/20.
 */
var parse = require('co-busboy');
var router = require('koa-router')();
var C = require('../controller/controller');
var fs = require('fs');
router.get('/oauth',C.oauth);
router.post('/uploadpic',C.upPic);
router.post('/virus',C.createVirus);
router.get('/virus/:userid',C.fightVirus);
router.put('/favor/:userid/:vid',C.favor);
router.put('/disfavor/:userid/:vid',C.disfavor)
module.exports = router