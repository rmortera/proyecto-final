const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    return next({
      status: 401,
      error: "Unauthorized",
      message: "No token provided",
    });
  }
  try {
    const decode = jwt.verify(token, "node", { algorithms: "HS512" });
    req.user = decode;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
