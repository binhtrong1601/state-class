import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0); //return [count,setCount]

  const onIncreaseClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>{count}</span>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
  );
}
export default Counter;
