import { Router } from "express";
import jwt from "jsonwebtoken";
import { envConstants } from "core/constants";
import { UserSession } from "common-app/models";
import { userRepository } from "dals";
import { authenticationMiddleware } from "./security.middlewares";

export const securityApi = Router();

securityApi
  .post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await userRepository.getUserByEmailAndPassword(
        email,
        password
      );
      if (user) {
        const userSession: UserSession = { id: user.id };
        const token = jwt.sign(userSession, envConstants.AUTH_SECRET, {
          expiresIn: "1d",
          algorithm: "HS256",
        });
        res.cookie("authorization", `Bearer ${token}`, {
          httpOnly: true,
          secure: envConstants.isProduction,
        });
        res.sendStatus(204);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      next(error);
    }
  })

  .get("/current-user", authenticationMiddleware, async (req, res, next) => {
    try {
      // const user = await userRepository.getUser(req.userSession?.id);
      console.log(req);
    } catch (error) {
      next(error);
    }
  })

  .post("/logout", authenticationMiddleware, async (req, res) => {
    res.clearCookie("authorization");
    res.sendStatus(200);
  });
