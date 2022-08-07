import React, { useState } from "react";
import AddUsers from "./Users/AddUsers.jsx";
import UsersList from "./Users/UsersList.jsx";

function App() {
  const [UsersLists, setUsersLists] = useState([]);

  const UsersListHandler = (EUsername, EUserAge) => {
    setUsersLists((prevUsersLists) => {
      return [
        ...prevUsersLists,
        { name: EUsername, age: EUserAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUsers OnaddUsers={UsersListHandler} />
      <UsersList users={UsersLists} />
    </React.Fragment> 
  );
}

export default App;
