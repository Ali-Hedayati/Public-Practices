import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { UserType } from "../services/userService";
import UserService from "../services/userService";

const useUsers = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //this is how you cancel a fetch request

    setLoading(true);
    const { request, cancel } = UserService.getAll<UserType>();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    // the code below dosent run in strick mode
    // .finally(() => {
    //   setLoading(false);
    // });

    //this is how you cancel a fetch request
    return () => cancel();
  }, []);

  return { users, error, loading, setUsers, setError };
};
export default useUsers;
