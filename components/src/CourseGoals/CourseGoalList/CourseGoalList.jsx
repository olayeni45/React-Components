import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  const { goals, onDeleteGoal } = props;
  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDeleteGoal={onDeleteGoal}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
