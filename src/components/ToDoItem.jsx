import React from "react";

function ToDoItem(props) {
  //const [hasLineThrough, setLineThrough] = useState(false);

  // function crossOutItem() {
  //   setLineThrough((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
