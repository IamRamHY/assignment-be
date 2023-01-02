let sessions: any = {};

export const sessionManager = {
  createSession: (data: any) => {
    sessions[data.id] = data;
    return true;
  },
  getSession: (id: string) => {
    return sessions[id];
  },
  destroySession: () => {
    sessions = {};
    return true;
  },
};
