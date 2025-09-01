import { useState } from "react";

function MenuItem({ item, price }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <li>
        <span>
          {item} - {price}{" "}
        </span>
        <button onClick={handleClick}>Add to cart {count}</button>
      </li>
    </>
  );
}

export default MenuItem;
