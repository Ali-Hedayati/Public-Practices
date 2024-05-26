import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { CanceledError } from "./services/apiClient";
import UserService, { UserType } from "./services/userService";
import userService from "./services/userService";

function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //this is how you cancel a fetch request

    setLoading(true);
    const { request, cancel } = UserService.getAll();

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

  /// how to delete a user
  const deleteMe = (user: UserType) => {
    const oldUsers = [...users];
    // this is optemistic update:
    setUsers(users.filter((e) => e.id !== user.id));

    UserService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(oldUsers);
    });
  };

  //how to add a user
  const addMe = () => {
    const oldUsers = [...users];
    const newUser = { id: 1, name: "jack" };
    setUsers([...users, newUser]);

    userService
      .add(newUser)
      .then((response) => setUsers([...users, response.data]))
      .catch((error) => {
        setError(error.message);
        setUsers(oldUsers);
      });
  };

  //how to change a user
  const changeMe = (user: UserType) => {
    const oldUsers = [...users];
    const changedUser = { ...user, name: user.name + " LOL" };
    setUsers(users.map((e) => (e.id === user.id ? changedUser : e)));

    userService.change(changedUser).catch((error) => {
      setError(error.message);
      setUsers(oldUsers); 
    });
  };

  return (
    <>
      {error && <h1 className="text-danger">{error}</h1>}
      {loading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((e) => (
          <li
            key={e.id}
            className="list-group-item d-flex justify-content-between"
          >
            {e.name}
            <div>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteMe(e)}
              >
                Delete me
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => changeMe(e)}
              >
                Change me
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mb-3" onClick={() => addMe()}>
        Add me
      </button>
    </>
  );
}

export default App;
