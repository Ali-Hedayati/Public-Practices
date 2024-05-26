import create from "./httpService";
export interface UserType {
  id: number;
  name: string;
}

export default create("/users");
