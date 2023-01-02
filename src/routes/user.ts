import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import Users from "../controller/users";
import { authorize } from "../helpers/auth";
import { getUsersSchema } from "../schemas";
import { iGetUseresRequest, iUser } from "../types";

async function routes(fastify: FastifyInstance) {
  const users = new Users();
  fastify.post(
    "/list",
    {
      preHandler: [authorize],
      schema: getUsersSchema,
    },
    async (
      request: FastifyRequest<{ Body: iGetUseresRequest }>,
      reply: FastifyReply
    ) => {
      try {
        const data = await (<Promise<Array<iUser>>>users.getUsers(request));
        console.log(data);

        return { statusCode: 200, message: "Users list", data };
      } catch (error) {
        console.log(error);
      }
    }
  );
}

export default routes;
