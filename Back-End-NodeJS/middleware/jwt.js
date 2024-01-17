const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Faizan code
  // const token = req.cookies.accessToken;
  // if (!token) return res.send("You are not authenticated!");
  // jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
  //   if (err) return res.send("Token is not valid");
  //   req.userId = payload.id;
  //   next(); // Call next to proceed with the request
  // });

  // Ahmed code
  // const { authorization } = req.headers;

  // if (!authorization) {
  //   return res.status(401).json({ error: "You must be logged in" });
  // }

  // const token = authorization.split(" ")[1];

  // try {
  //   const { _id } = jwt.verify(token, process.env.JWT_KEY);

  //   req.userId = _id;
  // } catch (error) {
  //   console.log(error);
  //   res.status(401).json({ error: "Request is not authorized" });
  // }

  // Testing endpoint without requiring authentication
  req.userId = "dummyUserId";
  next(); // Call next to proceed with the request
};

module.exports = {
  verifyToken,
};
