import { getUserById, fullUserData } from "./user";

export const userData = async (id: string) => {
  const user = await getUserById(id as string);

  return user;
};

export const fullPrivateData = async (id: string) => {
  const user = await fullUserData(id as string);

  return user;
};
