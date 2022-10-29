import { useState } from "react";

function Student() {
  const [student, setStudent] = useState({ name: "John", age: 10 });
  const onIncreaseAge = () => {
    // setStudent({ ...student, age: student.age + 1 });
    setStudent((prev) => {
      return { ...prev, age: student.age + 1 };
    });
  };

  return (
    <div>
      <p>
        Hello! I'm {student.name}. I'm {student.age} years old.
      </p>
      <button onClick={onIncreaseAge}>Increase age</button>
    </div>
  );
}
export default Student;
