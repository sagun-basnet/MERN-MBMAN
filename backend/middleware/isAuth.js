import jwt from "jsonwebtoken";

export const isVerify = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token, "TOKEN");

    const userData = jwt.verify(token, "secretkey");
    console.log(userData);

    req.userRole =
      userData.role_id === 1
        ? "admin"
        : userData.role_id === 2
          ? "staff"
          : userData.role_id === 3
            ? "manager"
            : userData.role_id === 4
              ? "user"
              : null;

    if (!token) {
      res.status(401).send({ message: "Please login first" });
    }

    next();
  } catch (err) {
    console.error(err);
  }
};

export const isAdmin = (req, res, next) => {
  if (req.userRole === "admin") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};

export const isStaff = (req, res, next) => {
  if (req.userRole === "staff") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};
export const isManager = (req, res, next) => {
  if (req.userRole === "manager") {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized" });
  }
};
