import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button";

const CourseInput = (props) => {
  const { onAddGoal } = props;
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (evt) => {
    const { value } = evt.target;
    if (value.trim().length > 0) {
      setIsValid(true);
    }
    setInput(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(input);
    setInput("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid && "invalid"}`}>
        <label>Course Goal</label>
        <input type="text" onChange={inputHandler} value={input} />
      </div>
      <Button type="submit"> Add Goal</Button>
    </form>
  );
};

export default CourseInput;
