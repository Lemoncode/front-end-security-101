import { User } from "./user.model";
import { db } from "../mock-data";

export const userRepository = {
  getUserByEmailAndPassword: async (email: string, password: string) =>
    db.userList.find(
      (u) => u.email === email && u.password === password
    ) as User,
  getUserList: async () => db.userList,
  getUser: async (id: string) => db.userList.find((u) => u.id === id) as User,
};
