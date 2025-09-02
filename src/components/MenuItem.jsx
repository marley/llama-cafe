import { useState } from "react";

function MenuItem({ item, price, imgSrc }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <li className="h4 container">
        <div className="row">
          <div className="col-3">
            <img src={imgSrc} height="100px" />
          </div>
          <span className="col d-flex align-items-center">
            {item} - {price}{" "}
          </span>
          <div className="col-5 d-flex align-items-center">
            <button onClick={handleClick}>Add to cart {count}</button>
          </div>
        </div>
      </li>
    </>
  );
}

export default MenuItem;
