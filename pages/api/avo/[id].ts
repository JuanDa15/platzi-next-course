import Database from "@database";
import { NextApiRequest, NextApiResponse } from "next";

const getAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new Database();
  const id = req.query.id;
  const product = await db.getById(id as string)
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json')
  res.status(200).json(product)
}

export default getAvo;