export const loginSchema = {
  body: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string", minLength: 3 },
      password: { type: "string", minLength: 3 },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        statusCode: { type: "number" },
        message: { type: "string" },
        data: {
          isLoggedIn: { type: "boolean" },
        },
      },
    },
  },
};

export const logoutSchema = {
  body: {
    type: "object",
    required: ["id"],
    properties: {
      id: { type: "string", minLength: 1 },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        statusCode: { type: "number" },
        message: { type: "string" },
        data: {
          isLoggedIn: { type: "boolean" },
        },
      },
    },
  },
};
