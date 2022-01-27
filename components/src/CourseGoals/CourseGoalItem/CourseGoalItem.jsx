import React from "react";
import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const { children, onDeleteGoal, id } = props;

  return (
    <li className="goal-item" onClick={() => onDeleteGoal(id)}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
