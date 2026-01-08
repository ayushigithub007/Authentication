import { Request, Response } from "express";
import { User } from "../models/user.model";

class AuthController {
  async getUsers(req: Request, res: Response) {
    const users = await User.findAll();
    res.json(users);
  }
}

export default new AuthController();
