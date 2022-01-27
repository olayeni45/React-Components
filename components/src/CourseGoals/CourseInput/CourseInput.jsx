import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button";

const CourseInput = (props) => {
  const { onAddGoal } = props;
  const [input, setInput] = useState("");

  const inputHandler = (evt) => {
    const { value } = evt.target;
    setInput(value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onAddGoal(input);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={inputHandler} />
      </div>
      <Button type="submit"> Add Goal</Button>
    </form>
  );
};

export default CourseInput;
