const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

router.post("/login", async function (req, res, next) {
  if (req.body.token) {
    jwt.verify(
      req.body.token,
      process.env.JWTSECRET,
      async function (err, val) {
        if (err) {
          return next(err);
        }

        const user = await prisma.user.findUnique({
          where: {
            id: val.id,
          },
        });

        if (!user) {
          return next({
            message: "User Not Present",
          });
        }
        res.status(200).json({ token: req.body.token, user });
      }
    );
  } else {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: req.body.username }, { email: req.body.username }],
      },
    });

    if (!user) {
      return next({
        message: "User Not Present",
      });
    }
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (err) {
        return next(err);
      }
      if (!result) {
        return next({
          message: "password incorrect",
        });
      }
      jwt.sign(
        { id: user._id, loggedIn: randomstring.generate(7) },
        process.env.JWTSECRET,
        async function (err, token) {
          user.status = "online";
          await user.save();
          res.status(200).json({
            user,
            token,
          });
        }
      );
    });
  }
});

router.post("/register", async function (req, res, next) {
  const password = await bcrypt.hash(req.body.password, 10);

  const user = await prisma.user.create({
    data: {
      name: req.body.fullname,
      email: req.body.email,
      password: password,
    },
  });
  res.status(200).json(user);
});

module.exports = router;
