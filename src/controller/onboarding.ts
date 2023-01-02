import { FastifyRequest } from "fastify";
import { registeredUsers } from "../dummy-db/registered-users";
import { sessionManager } from "../dummy-db/user-session";
import { iLoginRequest, iLogoutRequest } from "../types";

class OnBoarding {
  async login(request: FastifyRequest<{ Body: iLoginRequest }>) {
    try {
      const { email, password } = request.body;
      const found = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );
      if (sessionManager.createSession(found)) return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout(request: FastifyRequest<{ Body: iLogoutRequest }>) {
    try {
      const { id } = request.body;
      if (id) sessionManager.destroySession();
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default OnBoarding;
