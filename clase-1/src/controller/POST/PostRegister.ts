import { type Request, type Response } from "express";

interface DataUser {
  id: number;
  name: string;
  email: string;
}
const PostRegister = (req: Request, res: Response) => {
  try {
    const { id, name, email }: DataUser = req.body;

    if (!id || !name || !email) {
      return res
        .status(400)
        .json({ message: "Todos los campos son necesarios" });
    }

    res.status(200).json({
      date: name,
      message: "Hola Mundo!",
    });
  } catch (error) {
    console.error(`error al Registrar usuario ${error}`);
  }
};

export default PostRegister;
