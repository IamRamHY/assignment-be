import { FastifyRequest } from "fastify";
import { iGetUseresRequest } from "../types";
import usersData from "../mock-data/user.json";

class Users {
  async getUsers(request: FastifyRequest<{ Body: iGetUseresRequest }>) {
    try {
      const { skip, limit } = request.body;
      const paginatedData = usersData.slice(skip, skip + limit);
      return paginatedData;
    } catch (error) {
      return false;
    }
  }
}

export default Users;
