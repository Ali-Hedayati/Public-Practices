import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import UserService, { UserType } from "./services/userService";
import userService from "./services/userService";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, loading, setUsers, setError } = useUsers();

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
      .create(newUser)
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

    userService.update(changedUser).catch((error) => {
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
