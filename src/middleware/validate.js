const axios = require("axios");

exports.validateLogin = async (req, res, next) => {
  const response = await axios.post("http://localhost:3000/login", req.body);
  if (response.data.success) {
    req.headers.authorization = response.data.token;
    res.status(200).json({ sucess: "Login sucessfull" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

