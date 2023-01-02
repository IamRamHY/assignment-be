import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/user";
import onBoardRoutes from "./routes/onboard";

const PORT = 3001;


const fastify = Fastify({
  logger: true,
});

(async () => {
  await fastify.register(cors, {
    // put your options here
  });
})();


fastify.register(onBoardRoutes, { prefix: "/onboard" });
fastify.register(userRoutes, { prefix: "/users" });

fastify.listen({ port: PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
