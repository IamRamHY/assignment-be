export const getUsersSchema = {
  body: {
    type: "object",
    required: ["id", "skip", "limit"],
    properties: {
      id: { type: "string", minLength: 1 },
      skip: { type: "number", minLength: 1, minimum: 0 },
      limit: { type: "number", minLength: 1, minimum: 10 },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        statusCode: { type: "number" },
        message: { type: "string" },
        data: {
          id: { type: "number" },
          first_name: { type: "string" },
          last_name: { type: "string" },
          email: { type: "string" },
          gender: { type: "string" },
          profile_pic: { type: "string" },
          city: { type: "string" },
        },
      },
    },
  },
};
