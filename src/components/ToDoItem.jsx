import React, { useState } from "react";

function ToDoItem(props) {
  const [hasLineThrough, setLineThrough] = useState(false);

  function crossOutItem() {
    setLineThrough((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <li
      style={{
        textDecoration: hasLineThrough ? "line-through" : "none"
      }}
      onClick={crossOutItem}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
