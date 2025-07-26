import React from "react";
import QuestionItem from "./QuestionItem"; // Make sure this file exists

function QuestionList({ questions, setQuestions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            setQuestions={setQuestions}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
