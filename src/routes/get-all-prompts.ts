import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPrompts(app: FastifyInstance) {
  app.get("/prompts", async (_, reply) => {
    const prompts = await prisma.prompt.findMany();

    return reply.send({
      prompts,
    });
  });
}
