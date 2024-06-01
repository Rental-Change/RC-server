const { verifyToken } = require('../token/jwt'); // 올바른 경로로 수정

function loginRequired(req, res, next) {
  const userToken = req.headers["authorization"]?.split(" ")[1];

  if (!userToken || userToken === "null") {
    console.log("서비스 사용 요청이 있습니다. 하지만, Authorization 토큰: 없음");

    res.status(401).json({
      result: "forbidden-approach",
      message: "로그인한 유저만 사용할 수 있는 서비스입니다.",
    });

    return;
  }

  try {
    const jwtDecoded = verifyToken(userToken);
    if (jwtDecoded) {
      req.currentUserId = jwtDecoded.userId;
      next();
    } else {
      res.status(401).json({
        result: "forbidden-approach",
        message: "정상적인 토큰이 아닙니다.",
      });
    }
  } catch (error) {
    res.status(401).json({
      result: "forbidden-approach",
      message: "정상적인 토큰이 아닙니다.",
    });
  }
}

module.exports = loginRequired;
