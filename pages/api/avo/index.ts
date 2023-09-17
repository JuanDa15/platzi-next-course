import Database from "@database";
import { IncomingMessage, ServerResponse } from "http";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new Database();
  const products = await db.getAll()
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json')
  res.end(JSON.stringify({ length: products.length, data: products }))
}

export default allAvos;