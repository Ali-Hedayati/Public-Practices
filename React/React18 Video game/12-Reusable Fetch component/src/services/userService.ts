import apiClient from "./apiClient";
export interface UserType {
  id: number;
  name: string;
}

class UserService {
  //get method
  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<UserType[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    return apiClient.delete("/users/" + id);
  }

  add(newUser: UserType) {
    return apiClient.post("/users", newUser);
  }

  change(changedUser: UserType) {
    return apiClient.patch("/users/" + changedUser.id, changedUser);
  }
}

export default new UserService();
