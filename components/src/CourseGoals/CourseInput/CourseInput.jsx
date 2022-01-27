import React, { useState } from "react";
import styles from "./CourseInput.module.css";
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
      <div
        className={`${styles["form-control"]}  ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={inputHandler} value={input} />
      </div>
      <Button type="submit"> Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// import styled from "styled-components";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => (invalid ? "red" : "black")}
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
//     background-color: ${({ invalid }) => (invalid ? "#ffd7d7" : "transparent")}
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

// `;
