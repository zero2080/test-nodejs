const router = require('express').Router();

const jwt = require('jsonwebtoken');
const { jwtfilter } = require('../middleware/jwtfilter');
const Member = require('../entity/Member');
const { signup, getMember } = require('../repository/user_repository');
const { hashSync, compareSync } = require('bcrypt');
require('dotenv').config();

router.post('/signup', async (req, res) => {
    try {
        let body = req.body;

        // 비밀번호 암호화 
        body.password = hashSync(body.password, 10);

        await signup(body);
        res.status(201).send();
    } catch (err) {

        res.status(500).send();
    }
});

router.post('/login', async (req, res) => {
    try {
        let member = await getMember(req.body.login_id);

        if (compareSync(req.body.password, member.password)) {
            // jwt.sign() 메소드: 토큰 발급 
            const token = jwt.sign({
                "id": member.id,
                "login_id": member.login_id
            }, 'fitdo_secret',
                {
                    expiresIn: '24h', // 1시간
                    issuer: '토큰 발급자'
                }
            );

            res.status(200).json({
                code: 200,
                message: '토큰이 발급되었습니다.',
                token
            });
        } else {

        }
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