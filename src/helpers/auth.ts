import { DoneFuncWithErrOrRes } from "fastify";
import { sessionManager } from "../dummy-db/user-session";

export const authorize = async (
  request: any,
  reply: any,
  done: DoneFuncWithErrOrRes
) => {
  const id = request.body["id"];
  const found = sessionManager.getSession(id);
  if (!found) {
    reply.code(401).send({ statusCode: 401, error: "Session not found" });
  }
  done();
};
