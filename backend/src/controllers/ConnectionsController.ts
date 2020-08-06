import { Request, Response } from "express";

import db from "../database/connection";

export default class ConnectionsControler {
  async index(request: Request, response: Response) {
    console.log("index");

    const totalConnections = await db("connections").count("* as total");

    console.log(totalConnections);

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db("connections").insert({
      user_id,
    });

    return response.status(201).send();
  }
}
