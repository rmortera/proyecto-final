const jwt = require("jsonwebtoken");

class AuthService {
  static genToken(payload) {
    try {
      const token = jwt.sign(payload, "node", {
        algorithm: "HS512",
        expiresIn: "5m",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
