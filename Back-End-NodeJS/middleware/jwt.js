const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // const token = req.cookies.accessToken;
  // if (!token) return res.send("You are not authenticated!");
  // jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
  //   if (err) return res.send("Token is not valid");
  //   req.userId = payload.id;
  //   next(); // Call next to proceed with the request
  // });

  // Testing endpoint without requiring authentication
  req.userId = "dummyUserId";
  next(); // Call next to proceed with the request
};

module.exports = {
  verifyToken,
};
