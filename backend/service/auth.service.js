const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

class authService {
  async register(user) {
    const { username, email, password } = user;

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    return newUser;
  }

  async login(user) {
    const { email, password } = user;

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      throw new Error("Invalid email or password");
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isValidPassword) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, username: existingUser.username };
  }

  async logout() {
    return { message: "User logout seccessfully" };
  }
}

module.exports = new authService();
