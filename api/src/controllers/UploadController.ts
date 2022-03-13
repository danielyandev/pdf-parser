import {Request, Response} from "express";

const upload = async (req: Request, res: Response) => {
  try {
    res.status(200).send('Uploaded')
  } catch (e: any) {
    res.status(500).send({message: e.message})
  }
}

export default {
  upload
}