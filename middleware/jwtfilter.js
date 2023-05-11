const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

exports.jwtfilter = (req, res, next) => {
  try {
    // 인증 완료
    req.decoded = jwt.verify(req.headers.authorization, SECRET);
    return next();
  } catch (error) {
    // 인증 실패
    if (error.name === "TokenExpiredError") {
      return res.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    return res.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다.",
    });
  }
};

exports.createToken = (subject, claims) => {
  return jwt.sign(
    {
      id: subject,
      ...claims,
    },
    SECRET,
    {
      expiresIn: "24h", // 1시간
      issuer: "fitdo",
    }
  );
};
