import { Request, Response } from "express"
import User from "../models/user";

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({
      msg: `User with id: ${id} not found`
    });
  }

  res.json({ user });
}

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json({ users });
}

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const emailExist = await User.findOne({
      where: {
        email: body.email
      }
    });

    if (emailExist) {
      return res.status(400).json({
        msg: `User with email: ${body.email} already exists`
      });
    }

    const user = User.build(body);
    await user.save();

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error creating user"
    });
  }
}

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: `User with id: ${id} not found`
      });
    }

    await user.update(body);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error creating user"
    });
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({
      msg: `User with id: ${id} not found`
    });
  }

  // Eliminacion fisica
  // await user.destroy();

  await user.update({ status: false });

  res.json({
    msg: "User deleted successfully",
  });
}
