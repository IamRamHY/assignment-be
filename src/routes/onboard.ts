import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { iLoginRequest, iLogoutRequest } from "../types";
import { loginSchema, logoutSchema } from "../schemas";
import ObardingController from "../controller/onboarding";

async function onBoardRoutes(fastify: FastifyInstance) {
  const obardingController = new ObardingController();
  fastify.post(
    "/login",
    { schema: loginSchema },
    async (
      request: FastifyRequest<{ Body: iLoginRequest }>,
      reply: FastifyReply
    ) => {
      try {
        const response = await obardingController.login(request);
        if (response) {
          return {
            statusCode: 200,
            message: "login success",
            data: { isLoggedIn: true },
          };
        }
        return { statusCode: 401, message: "login fail" };
      } catch (error) {
        console.log(error);
      }
    }
  );

  fastify.post(
    "/logout",
    { schema: logoutSchema },
    async (
      request: FastifyRequest<{ Body: iLogoutRequest }>,
      reply: FastifyReply
    ) => {
      try {
        const response = await obardingController.logout(request);
        if (response) {
          return {
            statusCode: 200,
            message: "logout successfully",
            data: { isLoggedIn: false },
          };
        }
        return { statusCode: 401, message: "Unathorized" };
      } catch (error) {
        console.log(error);
      }
    }
  );
}

export default onBoardRoutes;
