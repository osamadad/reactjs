import React, { useState } from "react";
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import Error from "../UI/Error.jsx";
import "./AddUsers.css";

const AddUsers = (props) => {
  const [EnteredUsername, setEnteredUsername] = useState("");
  const [EnteredAge, setEnteredAge] = useState("");
  const [Errors, setErrors] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (EnteredUsername.trim().length === 0 || EnteredAge.trim().length === 0) {
      setErrors({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+EnteredAge < 1) {
      setErrors({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.OnaddUsers(EnteredUsername, EnteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };
  const UsernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const AgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const ErrorHandler = ({}) => {
    setErrors(null);
  };

  return (
    <React.Fragment>
      {Errors && (
        <Error
          title={Errors.title}
          message={Errors.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor='"username"'>Username</label>
          <input
            id="username"
            type="text"
            value={EnteredUsername}
            onChange={UsernameChangeHandler}
          />
          <label htmlFor='"age"'>Age</label>
          <input
            id="age"
            type="number"
            value={EnteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUsers;
