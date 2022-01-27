import React, { useState } from "react";
import "./App.css";
import CourseInput from "./CourseGoals/CourseInput/CourseInput";
import { INITIAL_EXPENSES } from "./static";
import CourseGoalList from "./CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
  const [coursegoals, SetCourseGoals] = useState(INITIAL_EXPENSES);

  const addGoalHandler = (goal) => {
    SetCourseGoals((prev) => {
      return [{ id: Math.random(), text: goal }, ...prev];
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id="goals">
        {coursegoals.length > 0 ? (
          <CourseGoalList goals={coursegoals} />
        ) : (
          <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
        )}
      </section>
    </div>
  );
};

export default App;
