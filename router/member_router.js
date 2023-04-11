const router = require('express').Router();

const jwt = require('jsonwebtoken');
const { jwtfilter } = require('../middleware/jwtfilter');
const Member = require('../entity/Member');
require('dotenv').config();


router.post('/signup', (req, res) => {
    try {
        console.log(process.env.JWT_SECRET);
        const id = 'vappet'
        const nick = 'hodoopapa'
        // jwt.sign() 메소드: 토큰 발급 
        const token = jwt.sign({
            id,
            nick,
        },
        'fitdo_secret',
        {
            expiresIn: '24h', //1분
            issuer: '토큰 발급자'
        });
        console.log(token);
       
        return res.json({
            code: 200,
            message: '토큰이 발급되었습니다.',
            token,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: '서버 에러',
        });
    }
});

router.get('/', jwtfilter, (req, res) => {
    res.json(new Member());
});

module.exports = router;