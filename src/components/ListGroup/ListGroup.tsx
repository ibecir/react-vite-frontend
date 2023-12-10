import { Item } from "../../utils/types";
import { MouseEvent, useState } from "react";

type ListGroupProps = {
  items: Item[];
  heading: string;
  onSelectItem: (item: Item) => void;
};

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  /* props: ListGroupProps */
  // This is the standard when using the useState hook
  // If you can recall from the typescript lecture, this is called array destructuring
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event: MouseEvent, item: Item) => {
    console.log(item);
    console.log(event);
  };
  return (
    <>
      {items.length === 0 && <p>Empty component</p>}

      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <p>No items found</p>
        ) : (
          items.map((item, index) => (
            <li
              key={index}
              onClick={(event) => {
                console.log(item);
                console.log(event);
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              className={
                "list-group-item" + (selectedIndex === index && " active")
              }
            >
              {item.name + " - " + item.population}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;
