import { MouseEvent, useState } from "react";
import Alert from "./components/Alert/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { Item } from "./utils/types";
import { ButtonColors } from "./constants";
import { cities } from "./constants";

const handleSelectItem = (item: Item) => {
  console.log("THE APP ITEM IS ", item);
};

function App() {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleButtonClick = (event: MouseEvent): void => {
    console.log(event);
    setIsAlertVisible(!isAlertVisible);
  };

  const handleAlertClose = (): void => {
    setIsAlertVisible(!isAlertVisible);
  };

  return (
    <>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {isAlertVisible && (
        <Alert onClose={handleAlertClose}>
          My Custom Alert Text <span>HTML</span>
        </Alert>
      )}
      <Button color={ButtonColors.danger} onClick={handleButtonClick}>
        Click me
      </Button>
    </>
  );
}

export default App;
