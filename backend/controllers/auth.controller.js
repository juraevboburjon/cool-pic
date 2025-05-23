const authService = require("../service/auth.service");

class AuthController {
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(200).json({ message: "User loginned success" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { token, username } = await authService.login(req.body);
      res.status(200).json({ message: "User loginned success" });
    } catch (error) {
      res.status(401).json({ message: "Email or Passwor not correct" });
    }
  }

  async logout(req, res) {
    try {
      const result = await authService.logout();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
