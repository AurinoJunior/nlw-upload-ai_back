import { fastify } from "fastify";

const app = fastify();

app.get("/", (req, reply) => {
  return reply.send("Tudo certo");
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running");
  });
