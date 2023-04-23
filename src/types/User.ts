export type UserCredentials = {
  email: string;
  password: string;
};
export type User = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};
export type UserAuth = {
  jwt: string;
  user: User;
};
